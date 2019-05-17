import React from 'react';
import Table from '@material-ui/core/Table';
import {ExtendedTableBody, ExtendedTableHead, ExtendedTableToolbar} from 'components/shared/ExtendedTable';
import * as PropTypes from 'prop-types';

class ExtendedTable extends React.Component {
    state = {
        order: 'asc',
        orderBy: 'name',
    };

    handleRequestSort = (event, property) => {
        const orderBy = property;
        let order = 'asc';

        if (this.state.orderBy === property && this.state.order === 'asc') {
            order = 'desc';
        }

        this.setState({order, orderBy});
    };

    render() {
        const {order, orderBy} = this.state;
        const {cols, data, title, className} = this.props;
        return (
            <React.Fragment>
                <ExtendedTableToolbar
                    cols={cols}
                    title={title}
                />
                <Table className={className}>
                    <ExtendedTableHead
                        cols={cols}
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={this.handleRequestSort}
                    />
                    <ExtendedTableBody
                        cols={cols}
                        data={data}
                        order={order}
                        orderBy={orderBy}
                    />
                </Table>
            </React.Fragment>
        );
    }
}

ExtendedTable.propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.string,
    cols: PropTypes.array.isRequired,
};

export default ExtendedTable;
