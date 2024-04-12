"use client";
import { Table } from "rsuite-table";

interface Props {
	data: {
		colorCode: string;
		colorName: string;
		basePrice: number;
		discount: number;
		available: number;
	}[];
}

const ProductVersionsTable = ({ data }: Props) => {
	return (
		<Table
			virtualized
			// defaultExpandAllRows
			// bordered
			// cellBordered
			// height={'fit-conte'}
			data={data}
			onRowClick={data => {
				console.log(data);
			}}>
			{({ Column, HeaderCell, Cell }) => (
				<>
					<Column width={80}>
						<HeaderCell>رنگ</HeaderCell>
						<Cell dataKey='colorCode'>
							{rowData => {
								console.log(rowData);
								return (
									<div
										className='size-16 rounded-lg'
										style={{ background: rowData.colorCode }}></div>
								);
							}}
						</Cell>
					</Column>

					<Column width={250}>
						<HeaderCell>نام یا کد رنگ</HeaderCell>
						<Cell dataKey='colorName' />
					</Column>

					<Column width={250}>
						<HeaderCell>قیمت پایه</HeaderCell>
						<Cell dataKey='basePrice' />
					</Column>

					<Column width={150}>
						<HeaderCell>تخفیف</HeaderCell>
						<Cell dataKey='discount' />
					</Column>

					<Column width={150}>
						<HeaderCell>تعداد موجود در انبار</HeaderCell>
						<Cell rowKey='available' />
					</Column>
				</>
			)}
		</Table>
	);
};

export default ProductVersionsTable;
