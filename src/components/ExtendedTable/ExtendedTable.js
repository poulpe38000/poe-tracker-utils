import React from 'react';
import Table from '@material-ui/core/Table';
import {ExtendedTableBody, ExtendedTableHead, ExtendedTableToolbar} from 'components/ExtendedTable';
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
        const {cols, data} = this.props;
        return (
            <React.Fragment>
                <ExtendedTableToolbar/>
                <Table>
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
    cols: PropTypes.array.isRequired,
};

export default ExtendedTable;
