import {conditions, actions} from 'components/Filter/shared/constants';

const cleanLines = (lines) => lines.map((line) => line.trim());

const isCommentLine = (line) => line.substr(0, 1) === '#';
const isEmptyLine = (line) => line === '';

const filterComments = (line) => line.replace(/#.*/g, '').trim();

const extractDescription = (line) => line.replace(/^#[ ]?/, '');

const isConditionBlockStart = (line) => {
    return line.startsWith('Show') || line.startsWith('Hide');
};

const getType = (name) => conditions[name] || actions[name];
const isCondition = (name) => conditions[name];
const isAction = (name) => actions[name];

const splitKeyValues = (line) => {
    const spacePosition = line.indexOf(' ');
    const key = line.substr(0, (spacePosition !== -1 ? spacePosition : undefined));
    let values = spacePosition !== -1
        ? line.substr(spacePosition + 1).match(/"[^"]+"|[\w<>=]+/g)
        : [];
    if (values.length > 0) {
        values = values.map((split) => {
            return split.replace(/"/g, '');
        });
    }
    return [key, values];
};

export function parseFilter(filterText) {
    const lines = cleanLines(filterText.split('\n'));
    let prevLine = null;
    const fileDesc = [];
    lines.every((line) => {
        if (!isCommentLine(line)) {
            return false;
        }
        fileDesc.push(extractDescription(line));
        return true;
    });
    const description = fileDesc.splice(0, fileDesc.length - 1).join('\n');
    const blocks = lines.reduce((res, line) => {
        if (isConditionBlockStart(line)) {
            const description = isCommentLine(prevLine)
                ? extractDescription(prevLine)
                : '';
            res.push({
                type: filterComments(line),
                description: description,
                elements: [],
                conditions: [],
                actions: []
            });
            return res;
        }
        if (!isCommentLine(line) && !isEmptyLine(line) && res.length > 0) {
            const element = splitKeyValues(line);
            const type = getType(element[0]);
            if (isCondition(element[0])) {
                res[res.length - 1].conditions.push({element, type});
            }
            if (isAction(element[0])) {
                res[res.length - 1].actions.push({element, type});
            }
        }
        prevLine = line;
        return res;
    }, []);
    return {description, blocks};
}