import React from 'react';
import {connect} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import {HIDEOUT_CONSTANTS, HIDEOUT_RARITIES} from 'constants/hideout';
import {hideoutToggleUnlocked} from 'store/hideout/actions';
import YesNo from 'components/layout/YesNo/YesNo';

class HideoutTable extends React.Component {

    hideoutToggleUnlocked = (hideoutId) => () => {
        this.props.hideoutToggleUnlocked(hideoutId);
    };

    render() {
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Rarity</TableCell>
                            <TableCell align="right">Location</TableCell>
                            <TableCell align="right">Map</TableCell>
                            <TableCell align="right">MTX</TableCell>
                            <TableCell align="right">Unlocked</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {HIDEOUT_CONSTANTS.map(row => {
                            const unlocked = !!this.props.unlockedHideouts.find(hideoutId => hideoutId === row.id);
                            return (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{HIDEOUT_RARITIES[row.rarity]}</TableCell>
                                    <TableCell align="right">{row.location.join(', ')}</TableCell>
                                    <TableCell align="right">
                                        <YesNo value={row.fromMap}/>
                                    </TableCell>
                                    <TableCell align="right">
                                        <YesNo value={row.fromMtx}/>
                                    </TableCell>
                                    <TableCell align="right">
                                        {unlocked && <CheckIcon onClick={this.hideoutToggleUnlocked(row.id)}/>}
                                        {!unlocked && <CloseIcon onClick={this.hideoutToggleUnlocked(row.id)}/>}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default connect(
    state => ({
        unlockedHideouts: state.hideout.unlocked,
    }),
    dispatch => ({
        hideoutToggleUnlocked: hideoutId => (dispatch(hideoutToggleUnlocked(hideoutId))),
    }),
)(HideoutTable);
