import React from 'react';
import Table from '@material-ui/core/Table';
import {ExtendedTableBody, ExtendedTableHead, ExtendedTableToolbar} from 'components/shared/ExtendedTable';
import * as PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core';

const styles = {
    tableWrapper: {
        overflowX: 'auto',
    },
    table: {
        minWidth: 500,
        tableLayout: 'fixed',
    }
};

class ExtendedTable extends React.Component {

    static propTypes = {
        data: PropTypes.array.isRequired,
        title: PropTypes.string,
        cols: PropTypes.array.isRequired,
    };

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
        const {cols, data, title, classes} = this.props;
        return (
            <React.Fragment>
                <ExtendedTableToolbar
                    cols={cols}
                    title={title}
                />
                <div className={classes.tableWrapper}>
                    <Table className={classes.table}>
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
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(ExtendedTable);
