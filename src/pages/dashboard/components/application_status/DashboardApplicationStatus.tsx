import { FC } from "react";
import { DashboardApplicationStatusProps } from "../../../../util/types/Interface";
import style from "./DashboardApplicationStatus.module.scss";

import Table from "react-bootstrap/Table";

const DashboardApplicationStatus: FC<DashboardApplicationStatusProps> = (
	props
) => {
	const { info } = props;

	console.log(info.userInfo);
	return (
		<div className={style.application}>
			{info.userInfo.applications === undefined && (
				<p className={style.empty}>Bạn chưa nộp hồ sơ vào trường nào</p>
			)}
			{info.userInfo.applications !== undefined && (
				<Table striped bordered hover>
					<thead>
						<tr>
							<th style={{ width: "30%" }}>Tên trường</th>
							<th style={{ width: "30%", textAlign: "center" }}>
								Ngành đăng kí
							</th>
							<th style={{ width: "30%", textAlign: "center" }}>
								Phương thức xét tuyển
							</th>
							<th
								className={style.center}
								style={{ textAlign: "center" }}
							>
								Trạng thái
							</th>
						</tr>
					</thead>
					<tbody>
						{info.userInfo.applications.map(
							(application: any, index: number) => {
								let listOfComponents: any = [];
								application.selectedMajor.forEach(
									(major: any) => {
										listOfComponents.push(
											<tr key={index}>
												<td style={{ width: "30%" }}>
													{application.schoolName}
												</td>
												<td
													style={{
														width: "30%",
														textAlign: "center",
													}}
												>
													{major}
												</td>
												<td
													style={{
														width: "30%",
														textAlign: "center",
													}}
												>
													{application.method}
												</td>
												<td
													className={style.center}
													style={{
														textAlign: "center",
														color: application.status
															? "green"
															: "red",
													}}
												>
													{application.status
														? "Đã được thông qua"
														: "Chưa thông qua"}
												</td>
											</tr>
										);
									}
								);
								return listOfComponents;
							}
						)}
					</tbody>
				</Table>
			)}
		</div>
	);
};

export default DashboardApplicationStatus;
