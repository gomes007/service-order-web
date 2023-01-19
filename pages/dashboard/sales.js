const Sales = () => {
    return (
        <div className='sales_page'>
            <header>
                <div className="column_1">
                    <h2 className="title">Sem Parar</h2>
                </div>
                <div className="column_2">
                    <h3 className="title">CALL CENTER REPORT</h3>
                </div>
            </header>

            <div className="general_content">

                <div className="left_content">
                    <div className="chart chart_1"></div>
                    <div className="chart chart_2"></div>
                    <div className="chart chart_3"></div>
                </div>


                <div className="right_content">

                    <div className="line_1">
                        <div className="chart chart_1"></div>
                        <div className="chart chart_2"></div>
                        <div className="chart chart_3"></div>
                        <div className="chart chart_4"></div>
                        <div className="chart chart_5"></div>
                        <div className="chart chart_6"></div>
                    </div>

                    <div className="line_2">
                        <div className="chart chart_1"></div>
                        <div className="chart chart_2"></div>
                        <div className="chart chart_3"></div>
                    </div>

                    <div className="line_3">

                        <div className="col_column_1"></div>

                        <div className="col_column_2">
                            <div className="col_line_1">
                                <div className="chart chart_1"></div>
                                <div className="chart chart_2"></div>
                                <div className="chart chart_3"></div>
                            </div>

                            <div className="col_line_2">
                                <div className="chart chart_1"></div>
                                <div className="chart chart_2"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <footer>
                <h3>Sales Control</h3>
            </footer>

        </div>
    )
}
export default Sales
