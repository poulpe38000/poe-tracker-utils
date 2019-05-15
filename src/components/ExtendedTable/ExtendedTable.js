import React from 'react';
import Table from '@material-ui/core/Table';
import {ExtendedTableBody, ExtendedTableHead, ExtendedTableToolbar} from 'components/ExtendedTable';
import * as PropTypes from 'prop-types';

class ExtendedTable extends React.Component {
    state = {
        order: 'asc',
        orderBy: 'name',
        filters: {}
    };

    handleRequestSort = (event, property) => {
        const orderBy = property;
        let order = 'asc';

        if (this.state.orderBy === property && this.state.order === 'asc') {
            order = 'desc';
        }

        this.setState({order, orderBy});
    };

    handleFilterUpdate = (filterKey, value) => {
        this.setState({
            filters: {
                ...this.state.filters,
                [filterKey]: value
            }
        });
    };

    render() {
        const {order, orderBy, filters} = this.state;
        const {cols, data} = this.props;
        return (
            <React.Fragment>
                <ExtendedTableToolbar cols={cols} filters={filters} onFilterUpdate={this.handleFilterUpdate}/>
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
                        filters={filters}
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
