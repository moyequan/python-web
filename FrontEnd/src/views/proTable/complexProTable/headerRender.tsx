import { ElMessage } from "element-plus";
import { ColumnProps } from "@/components/ProTable/interface";

// 自定义渲染表头（使用tsx语法）
const headerRender = (row: ColumnProps) => {
return (
<el-button
type="primary"
onClick={() => {
ElMessage.success("我是通过 tsx 语法渲染的表头");
}}
>
{row.label}
</el-button>
);
};
