import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import yup from "yup";

const Schema = yup.object().shape({
    category: yup.string().required(),
    locationCity: yup.string().required(),
    shortLocation: yup.string().required(),
});

const initialValues = {
    category: "",
    locationCity: "",
    shortLocation: "",
};

const locations = [
    "An Giang",
    "Bà Rịa - Vũng Tàu",
    "Bắc Giang",
    "Bắc Kạn",
    "Bạc Liêu",
    "Bắc Ninh",
    "Bến Tre",
    "Bình Định",
    "Bình Dương",
    "Bình Phước",
    "Bình Thuận",
    "Cà Mau",
    "Cần Thơ",
    "Cao Bằng",
    "Đà Nẵng",
    "Đắk Lắk",
    "Đắk Nông",
    "Điện Biên",
    "Đồng Nai",
    "Đồng Tháp",
    "Gia Lai",
    "Hà Giang",
    "Hà Nam",
    "Hà Nội",
    "Hà Tĩnh",
    "Hải Dương",
    "Hải Phòng",
    "Hậu Giang",
    "Hòa Bình",
    "Hưng Yên",
    "Khánh Hòa",
    "Kiên Giang",
    "Kon Tum",
    "Lai Châu",
    "Lâm Đồng",
    "Lạng Sơn",
    "Lào Cai",
    "Long An",
    "Nam Định",
    "Nghệ An",
    "Ninh Bình",
    "Ninh Thuận",
    "Phú Thọ",
    "Phú Yên",
    "Quảng Bình",
    "Quảng Nam",
    "Quảng Ngãi",
    "Quảng Ninh",
    "Quảng Trị",
    "Sóc Trăng",
    "Sơn La",
    "Tây Ninh",
    "Thái Bình",
    "Thái Nguyên",
    "Thanh Hóa",
    "Thừa Thiên Huế",
    "Tiền Giang",
    "Hồ Chí Minh",
    "Trà Vinh",
    "Tuyên Quang",
    "Vĩnh Long",
    "Vĩnh Phúc",
    "Yên Bái",
]

const categories = [
    { name: "Kinh doanh và kinh tế", cat: "kdkt" },
    { name: "Sản xuất và chế biến", cat: "sxcb" },
    { name: "Kiến trúc và xây dựng", cat: "ktxd" },
    { name: "Công nghệ thông tin", cat: "cntt" },
    { name: "Luật - nhân văn", cat: "ltnv" },
    { name: "Nghệ thuât và đồ họa", cat: "ntdh" },
    { name: "Báo chí và xã hội", cat: "bcxh" },
    { name: "Khoa học cơ bản", cat: "khcb" },
    { name: "Giáo dục và sư phạm", cat: "spgd" },
    { name: "Nông lâm ngư nghiệp", cat: "nlnn" },
];

const SchoolSchemaInput = () => {
    return (
        <section>
            <Formik
                validationSchema={Schema}
                onSubmit={console.log}
                initialValues={initialValues}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors,
                }) => {
                    return <Form noValidate onSubmit={handleSubmit}></Form>;
                }}
            </Formik>
        </section>
    );
};

export default SchoolSchemaInput;
