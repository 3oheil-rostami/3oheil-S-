"use client";
import { Cell, Table } from "rsuite-table";
import IconButton from "./form/IconButton";
import { MdDelete, MdEdit } from "react-icons/md";

interface ImageCellProps {
	rowData: any;
	dataKey: string;
	forIcon?: boolean;
	props?: any;
}

const CategoriesTable = (data: any) => {
	const ImageCell = ({ rowData, dataKey, forIcon, ...props }: ImageCellProps) => {
		console.log("rowData:", rowData, "|  dataKey:", dataKey);
		return (
			<Cell {...props} style={{ padding: 0, height: "100%" }}>
				<div
					className="bg-neutral-50 mt-0.5 overflow-hidden inline-block"
					style={{ width: forIcon ? "50px" : "100%", height: forIcon ? "50px" : "100px" }}>
					<img
						src={`http://localhost:4000/image/${forIcon ? rowData.icon : rowData.pic}`}
						className="size-full object-cover"
					/>
				</div>
			</Cell>
		);
	};

	const LargeListsTable = () => {
		return (
			<div>
				<Table
					virtualized
					// isTree={true}
					rowKey={"subs"}
					// defaultExpandAllRows
					// bordered
					// cellBordered
					// height={'fit-conte'}
					data={data.data}
					// shouldUpdateScroll={false}
					// onExpandChange={(isOpen, rowData) => {
					// 	console.log(isOpen, rowData);
					// }}
					renderTreeToggle={(icon, rowData) => {
						if (rowData.children && rowData.children.length === 0) {
							return;
						}
						return icon;
					}}
					onRowClick={data => {
						console.log(data);
					}}>
					{({ Column, HeaderCell, Cell }) => (
						<>
							<Column width={80} align="">
								<HeaderCell>عکس</HeaderCell>
								<ImageCell dataKey="pic" rowData={data.data} />
							</Column>

							<Column width={130}>
								<HeaderCell>نام</HeaderCell>
								<Cell dataKey="name" />
							</Column>

							<Column width={200}>
								<HeaderCell>آدرس صفحه</HeaderCell>
								<Cell dataKey="href" />
							</Column>

							<Column width={250}>
								<HeaderCell>درباره آن</HeaderCell>
								<Cell dataKey="info" />
							</Column>

							<Column width={50}>
								<HeaderCell>اولویت</HeaderCell>
								<Cell dataKey="level" />
							</Column>

							<Column width={50}>
								<HeaderCell>آیکون</HeaderCell>
								<ImageCell forIcon={true} rowData={data.data} dataKey="icon" />
							</Column>

							<Column width={100}>
								<HeaderCell>گزینه ها</HeaderCell>
								<Cell rowKey={"_id"}>
									<div className="flex gap-2">
										<IconButton colorScheme="primary" size="lg" variant="outline">
											<MdEdit />
										</IconButton>
										<IconButton colorScheme="primary" size="lg" variant="fill">
											<MdDelete />
										</IconButton>
									</div>
								</Cell>
							</Column>
						</>
					)}
				</Table>
			</div>
		);
	};
	return LargeListsTable();
};

export default CategoriesTable;
