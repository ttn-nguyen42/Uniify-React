import React from "react";
import {useDispatch, useSelector} from "react-redux";

import style from "./AdminForm.module.scss";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

import {
    AdmissionSchema,
    ContactSchema,
    FacilitySchema,
    GallerySchema,
    HeaderSchema,
    MajorListSchema,
    OverviewSchema
} from "../../util/schema/DatabaseSchema";

import {
    updateAdmissionSchema,
    updateContactSchema,
    updateFacilitySchema,
    updateGallerySchema,
    updateHeaderSchema,
    updateMajorSchema,
    updateOverviewSchema,
    updateSchoolSchema
} from "../../util/state/slice/adminSlice";

import {
    categories,
    dgnlOptions,
    entryMonthOptions,
    labOptions,
    locations,
    otherOptions,
    programOptions,
    studyTimeOptions,
    subjectOfEducationOptions,
    supportingFacilityOptions,
    thptqgOptions,
    xthsOptions
} from "../../util/default/DefaultOptions";

import useValidator from "../../util/hooks/useValidator";
import {filterArray, slugifyCategory, slugifyLocation} from "../../util/ultility/UtilityFunctions";
import {inputDataTransformation} from "../../util/ultility/AdminUtility";
import {RootState} from "../../util/state/store/globalStore";
import useCheckboxValidator from "../../util/hooks/useCheckboxValidator";

const cityOptions = locations.map((item: string, index) => {
    const sluggedStringForUrl = slugifyLocation(item);
    return (
        <option key={index} value={sluggedStringForUrl}>
            {item}
        </option>
    );
});

const
    AdminForm = () => {

        // Global state management
        const dispatch = useDispatch();
        const formState = useSelector((state: RootState) => state.admin);

        // Form state
        const [_schoolNameFocus, _schoolNameValidator, _schoolNameState] = useValidator(formState.header.schoolName);
        const [_englishNameFocus, _englishNameValidator, _englishNameState] = useValidator(formState.header.schoolName);
        const [_shortLocationFocus, _shortLocationValidator, _shortLocationState] = useValidator(formState.shortLocation);
        const [_locationCityFocus, _locationCityValidator, _locationCityState] = useValidator(formState.locationCity);
        const [_descriptionFocus, _descriptionValidator, _descriptionState] = useValidator(formState.overview.description);
        const [_facilityImageFocus, _facilityImageValidator, _facilityImageState] = useValidator(formState.overview.facilityImage[0]);
        const [_mainImageFocus, _mainImageValidator, _mainImageState] = useValidator(formState.gallery.mainImage);
        const [_sideImage1Focus, _sideImage1Validator, _sideImage1State] = useValidator(formState.gallery.sideImage1);
        const [_sideImage2Focus, _sideImage2Validator, _sideImage2State] = useValidator(formState.gallery.sideImage2);
        const [_addressFocus, _addressValidator, _addressState] = useValidator(formState.contact.address[0]);
        const [_emailFocus, _emailValidator, _emailState] = useValidator(formState.contact.contactEmail[0]);
        const [_websiteFocus, _websiteValidator, _websiteState] = useValidator(formState.contact.mainWebsite[0]);
        const [_phoneFocus, _phoneValidator, _phoneState] = useValidator(formState.contact.contactNumber[0]);
        const [_schoolCodeFocus, _schoolCodeValidator, _schoolCodeState] = useValidator(formState.contact.schoolCode[0]);
        const [_allMajorListFocus, _allMajorListValidator, _allMajorListState] = useValidator(formState.major.allMajorList[0]);

        // Checkbox state
        const _subjectOfEducationState = useCheckboxValidator(formState.overview.subjectOfEducation);
        const _programsState = useCheckboxValidator(formState.overview.programs);
        const _entryMonthState = useCheckboxValidator(formState.overview.entryMonth);
        const _studyTimeOptionsState = useCheckboxValidator(formState.overview.studyTime);
        const _supportingFacilityState = useCheckboxValidator(formState.facility.supportingFacility);
        const _labOptionsState = useCheckboxValidator(formState.facility.labs);
        const _thptState = useCheckboxValidator(formState.admission.thptqg);
        const _xthsState = useCheckboxValidator(formState.admission.xths);
        const _dgnlState = useCheckboxValidator(formState.admission.dgnl);
        const _otherMethodState = useCheckboxValidator(formState.admission.otherMethod);

        // State check form controls
        const validated = !_schoolCodeValidator && !_englishNameValidator && !_shortLocationValidator && !_locationCityValidator && !_descriptionValidator && !_facilityImageValidator && !_mainImageValidator && !_sideImage1Validator && !_sideImage2Validator && !_addressValidator && !_emailValidator
            && !_websiteValidator && !_phoneValidator && !_schoolNameValidator && !_allMajorListValidator;

        // State check checkboxes
        const checkboxValidated = _subjectOfEducationState && _programsState && _entryMonthState && _studyTimeOptionsState && _supportingFacilityState && _labOptionsState && _thptState && _xthsState && _dgnlState && _otherMethodState;

        // Focus state check (form controls)
        const focussed = _schoolNameState && _englishNameState && _shortLocationState && _locationCityState && _descriptionState && _facilityImageState && _mainImageState && _sideImage1State && _sideImage2State && _addressState && _emailState && _websiteState && _phoneState && _schoolCodeState && _allMajorListState;

        // Overall form submit-ability
        const submissable = validated && focussed && checkboxValidated;

        const handleSubmit = (event: React.SyntheticEvent) => {
            event.preventDefault();
            if (submissable) {
                inputDataTransformation(formState);
            }
        };

        return (
            <section className={style.form}>
                <Form>
                    <section>
                        <Row className="gap-3">
                            <Col md>
                                <Form.Group>
                                    <Form.Label>Tên trường</Form.Label>
                                    <Alert variant="warning">
                                        Viết hoa đầu câu, đầy đủ tên
                                        <br/>
                                        Ví dụ: Trường Đại học Bách khoa TP.HCM; Trường Đại
                                        học Kinh tế TP.HCM;...
                                    </Alert>
                                    <Form.Control
                                        isInvalid={_schoolNameValidator}
                                        onBlur={_schoolNameFocus}
                                        value={formState.header.schoolName}
                                        onChange={(
                                            event: React.ChangeEvent<HTMLInputElement>
                                        ) => {
                                            const newHeaderState: HeaderSchema = {
                                                ...formState.header,
                                                schoolName: event.target.value,
                                            };
                                            dispatch(updateHeaderSchema(newHeaderState));
                                        }}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Group>
                                    <Form.Label>Tên tiếng Anh</Form.Label>
                                    <Alert variant="warning">
                                        Viết hoa đầu câu, đầy đủ tên
                                        <br/>
                                        Ví dụ: Ho Chi Minh University of Technology; Ho Chi
                                        Minh University of Economics;...
                                    </Alert>
                                    <Form.Control
                                        value={formState.header.englishName}
                                        onBlur={_englishNameFocus}
                                        isInvalid={_englishNameValidator}
                                        onChange={(
                                            event: React.ChangeEvent<HTMLInputElement>
                                        ) => {
                                            const newHeaderState: HeaderSchema = {
                                                ...formState.header,
                                                englishName: event.target.value,
                                            };
                                            dispatch(updateHeaderSchema(newHeaderState));
                                        }}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </section>
                    <section>
                        <h5>Phân loại dữ liệu</h5>
                        <p>Thông tin sử dụng để phân loại dữ liệu</p>
                        <Row className="gap-3">
                            <Col md>
                                <Form.Group>
                                    <Form.Label>Thành phố</Form.Label>
                                    <Form.Select
                                        isInvalid={_locationCityValidator}
                                        onBlur={_locationCityFocus}
                                        defaultValue={formState.locationCity}
                                        onChange={(
                                            event: React.ChangeEvent<HTMLSelectElement>
                                        ) => {
                                            const currentCityState = {
                                                ...formState,
                                                locationCity: event.target.value,
                                            };
                                            dispatch(updateSchoolSchema(currentCityState));
                                        }}
                                    >
                                        {cityOptions}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Group>
                                    <Form.Label>Danh mục</Form.Label>
                                    {categories.map((item: string, index) => {
                                        const sluggedStringForUrl = slugifyCategory(item);
                                        return (
                                            <Form.Check
                                                type="checkbox"
                                                key={index}
                                                label={item}
                                                id={sluggedStringForUrl}
                                                onChange={(
                                                    event: React.ChangeEvent<HTMLInputElement>
                                                ) => {
                                                    const currentCategoryState = {
                                                        ...formState,
                                                        category: {
                                                            ...formState.category,
                                                            [sluggedStringForUrl]: true,
                                                        },
                                                    };
                                                    if (!event.target.checked) {
                                                        delete currentCategoryState
                                                            .category[sluggedStringForUrl];
                                                    }
                                                    dispatch(
                                                        updateSchoolSchema(
                                                            currentCategoryState
                                                        )
                                                    );
                                                }}
                                            />
                                        );
                                    })}
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Group>
                                    <Form.Label>Quận & Thành phố</Form.Label>
                                    <Alert variant="warning">
                                        Ngắn gọn, được viết tắt <b>Thành phố</b> thành{" "}
                                        <b>TP</b>, phải viết hoa đầu chữ
                                        <br/>
                                        Ví dụ: Quận 10, TP.HCM; Hai Bà Trưng, Hà Nội;...
                                    </Alert>
                                    <Form.Control
                                        type="text"
                                        value={formState.shortLocation}
                                        onBlur={_shortLocationFocus}
                                        isInvalid={_shortLocationValidator}
                                        onChange={(
                                            event: React.ChangeEvent<HTMLInputElement>
                                        ) => {
                                            const currentShortState = {
                                                ...formState,
                                                shortLocation: event.target.value,
                                            };
                                            dispatch(updateSchoolSchema(currentShortState));
                                        }}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </section>
                    <section>
                        <Row className="gap-3">
                            <Col md>
                                <Form.Group>
                                    <Form.Label>Giới thiệu</Form.Label>
                                    <Form.Control
                                        style={{height: "100%"}}
                                        as="textarea"
                                        value={formState.overview.description}
                                        onBlur={_descriptionFocus}
                                        isInvalid={_descriptionValidator}
                                        onChange={(
                                            event: React.ChangeEvent<HTMLInputElement>
                                        ) => {
                                            const newDescriptionState: OverviewSchema = {
                                                ...formState.overview,
                                                description: event.target.value,
                                            };
                                            dispatch(
                                                updateOverviewSchema(newDescriptionState)
                                            );
                                        }}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Group>
                                    <Form.Label>Cấp đào tạo</Form.Label>
                                    {subjectOfEducationOptions.map((item: any, index) => {
                                        return (
                                            <Form.Check
                                                label={item}
                                                key={index}
                                                type="checkbox"
                                                id={item}
                                                onChange={(
                                                    event: React.ChangeEvent<HTMLInputElement>
                                                ) => {
                                                    const newSubjectState: OverviewSchema =
                                                        {
                                                            ...formState.overview,
                                                            subjectOfEducation: [
                                                                ...formState.overview
                                                                    .subjectOfEducation,
                                                                item,
                                                            ],
                                                        };
                                                    if (!event.target.checked) {
                                                        newSubjectState.subjectOfEducation =
                                                            filterArray(
                                                                newSubjectState.subjectOfEducation,
                                                                item
                                                            );
                                                    }
                                                    dispatch(
                                                        updateOverviewSchema(
                                                            newSubjectState
                                                        )
                                                    );
                                                }}
                                            />
                                        );
                                    })}
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Group>
                                    <Form.Label>Chương trình đào tạo</Form.Label>
                                    {programOptions.map((item: string, index) => {
                                        return (
                                            <Form.Check
                                                label={item}
                                                key={index}
                                                type="checkbox"
                                                id={item}
                                                onChange={(
                                                    event: React.ChangeEvent<HTMLInputElement>
                                                ) => {
                                                    const newSubjectState: OverviewSchema =
                                                        {
                                                            ...formState.overview,
                                                            programs: [
                                                                ...formState.overview
                                                                    .programs,
                                                                item,
                                                            ],
                                                        };
                                                    if (!event.target.checked) {
                                                        newSubjectState.programs =
                                                            filterArray(
                                                                newSubjectState.programs,
                                                                item
                                                            );
                                                    }
                                                    dispatch(
                                                        updateOverviewSchema(
                                                            newSubjectState
                                                        )
                                                    );
                                                }}
                                            />
                                        );
                                    })}
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Group>
                                    <Form.Label>Thời gian nhập học</Form.Label>
                                    {entryMonthOptions.map((item: string, index) => {
                                        return (
                                            <Form.Check
                                                label={item}
                                                key={index}
                                                type="checkbox"
                                                id={item}
                                                onChange={(
                                                    event: React.ChangeEvent<HTMLInputElement>
                                                ) => {
                                                    const newSubjectState: OverviewSchema =
                                                        {
                                                            ...formState.overview,
                                                            entryMonth: [
                                                                ...formState.overview
                                                                    .entryMonth,
                                                                item,
                                                            ],
                                                        };
                                                    if (!event.target.checked) {
                                                        newSubjectState.entryMonth =
                                                            filterArray(
                                                                newSubjectState.entryMonth,
                                                                item
                                                            );
                                                    }
                                                    dispatch(
                                                        updateOverviewSchema(
                                                            newSubjectState
                                                        )
                                                    );
                                                }}
                                            />
                                        );
                                    })}
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Group>
                                    <Form.Label>Thời gian đào tạo</Form.Label>
                                    {studyTimeOptions.map((item: string, index) => {
                                        return (
                                            <Form.Check
                                                label={item}
                                                key={index}
                                                type="checkbox"
                                                id={item}
                                                onChange={(
                                                    event: React.ChangeEvent<HTMLInputElement>
                                                ) => {
                                                    const newSubjectState: OverviewSchema =
                                                        {
                                                            ...formState.overview,
                                                            studyTime: [
                                                                ...formState.overview
                                                                    .studyTime,
                                                                item,
                                                            ],
                                                        };
                                                    if (!event.target.checked) {
                                                        newSubjectState.studyTime =
                                                            filterArray(
                                                                newSubjectState.studyTime,
                                                                item
                                                            );
                                                    }
                                                    dispatch(
                                                        updateOverviewSchema(
                                                            newSubjectState
                                                        )
                                                    );
                                                }}
                                            />
                                        );
                                    })}
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md>
                                <Form.Group>
                                    <Form.Label>Ảnh cơ sở vật chất</Form.Label>
                                    <Alert variant="warning">
                                        Lấy URL ảnh từ Google, cách mỗi link sử dụng dấu
                                        ";", không cách dòng, không whitespace. Tối thiểu 3
                                        ảnh
                                        <br/>
                                        Ví dụ: www.url-anh.com/image=600x600<b>;</b>
                                        www.url-anh.com/image=800x300
                                    </Alert>
                                    <Form.Control
                                        onBlur={_facilityImageFocus}
                                        isInvalid={_facilityImageValidator}
                                        style={{height: "100%"}}
                                        as="textarea"
                                        value={formState.overview.facilityImage[0]}
                                        onChange={(
                                            event: React.ChangeEvent<HTMLInputElement>
                                        ) => {
                                            const newImageLinkState: OverviewSchema = {
                                                ...formState.overview,
                                                facilityImage: [event.target.value],
                                            };
                                            dispatch(
                                                updateOverviewSchema(newImageLinkState)
                                            );
                                        }}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </section>
                    <section>
                        <Row className="gap-3">
                            <Col md>
                                <Form.Group>
                                    <Form.Label>Ảnh chính</Form.Label>
                                    <Alert variant="warning">
                                        Ảnh được đặt làm ảnh chính ở trang profile riêng của
                                        trường trong mục <b>Khám phá</b>
                                        <br/>
                                        Lấy link ảnh từ Google (nhớ phải lấy URL).
                                    </Alert>
                                    <Form.Control
                                        onBlur={_mainImageFocus}
                                        isInvalid={_mainImageValidator}
                                        type="text"
                                        value={formState.gallery.mainImage}
                                        onChange={(
                                            event: React.ChangeEvent<HTMLInputElement>
                                        ) => {
                                            const newImageState: GallerySchema = {
                                                ...formState.gallery,
                                                mainImage: event.target.value,
                                            };
                                            dispatch(updateGallerySchema(newImageState));
                                        }}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Group>
                                    <Form.Label>Ảnh phụ 1</Form.Label>
                                    <Alert variant="warning">
                                        Ảnh được đặt làm ảnh bên phải đầu tiên ở trang
                                        profile riêng của trường trong mục <b>Khám phá</b>
                                        <br/>
                                        Được dùng làm ảnh cho avatar nhỏ tại trang Explore
                                    </Alert>
                                    <Form.Control
                                        onBlur={_sideImage1Focus}
                                        isInvalid={_sideImage1Validator}
                                        type="text"
                                        value={formState.gallery.sideImage1}
                                        onChange={(
                                            event: React.ChangeEvent<HTMLInputElement>
                                        ) => {
                                            const newImageState: GallerySchema = {
                                                ...formState.gallery,
                                                sideImage1: event.target.value,
                                            };
                                            dispatch(updateGallerySchema(newImageState));
                                        }}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Group>
                                    <Form.Label>Ảnh phụ 2</Form.Label>
                                    <Alert variant="warning">
                                        Ảnh được đặt làm ảnh bên phải thứ 2 ở trang profile
                                        riêng của trường trong mục <b>Khám phá</b>
                                        <br/>
                                        Chưa có mục đích khác cụ thể
                                    </Alert>
                                    <Form.Control
                                        onBlur={_sideImage2Focus}
                                        isInvalid={_sideImage2Validator}
                                        type="text"
                                        value={formState.gallery.sideImage2}
                                        onChange={(
                                            event: React.ChangeEvent<HTMLInputElement>
                                        ) => {
                                            const newImageState: GallerySchema = {
                                                ...formState.gallery,
                                                sideImage2: event.target.value,
                                            };
                                            dispatch(updateGallerySchema(newImageState));
                                        }}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </section>
                    <section>
                        <Row className="gap-3">
                            <Col md>
                                <Form.Group>
                                    <Form.Label>Cơ sở vật chất hỗ trợ</Form.Label>
                                    {supportingFacilityOptions.map(
                                        (item: string, index) => {
                                            return (
                                                <Form.Check
                                                    label={item}
                                                    key={index}
                                                    type="checkbox"
                                                    id={item}
                                                    onChange={(
                                                        event: React.ChangeEvent<HTMLInputElement>
                                                    ) => {
                                                        const newFacilityState: FacilitySchema =
                                                            {
                                                                ...formState.facility,
                                                                supportingFacility: [
                                                                    ...formState.facility
                                                                        .supportingFacility,
                                                                    item,
                                                                ],
                                                            };
                                                        if (!event.target.checked) {
                                                            newFacilityState.supportingFacility =
                                                                filterArray(
                                                                    newFacilityState.supportingFacility,
                                                                    item
                                                                );
                                                        }

                                                        dispatch(
                                                            updateFacilitySchema(
                                                                newFacilityState
                                                            )
                                                        );
                                                    }}
                                                />
                                            );
                                        }
                                    )}
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Group>
                                    <Form.Label>Phòng thí nghiệm</Form.Label>
                                    {labOptions.map((item: string, index) => {
                                        return (
                                            <Form.Check
                                                label={item}
                                                key={index}
                                                type="checkbox"
                                                id={item}
                                                onChange={(
                                                    event: React.ChangeEvent<HTMLInputElement>
                                                ) => {
                                                    const newFacilityState: FacilitySchema =
                                                        {
                                                            ...formState.facility,
                                                            labs: [
                                                                ...formState.facility.labs,
                                                                item,
                                                            ],
                                                        };
                                                    if (!event.target.checked) {
                                                        newFacilityState.labs = filterArray(
                                                            newFacilityState.labs,
                                                            item
                                                        );
                                                    }
                                                    dispatch(
                                                        updateFacilitySchema(
                                                            newFacilityState
                                                        )
                                                    );
                                                }}
                                            />
                                        );
                                    })}
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Group>
                                    <Form.Label>Khối thi THPTQG</Form.Label>
                                    {thptqgOptions.map((item: string, index) => {
                                        return (
                                            <Form.Check
                                                label={item}
                                                key={index}
                                                type="checkbox"
                                                id={item}
                                                onChange={(
                                                    event: React.ChangeEvent<HTMLInputElement>
                                                ) => {
                                                    const newAdmissionState: AdmissionSchema =
                                                        {
                                                            ...formState.admission,
                                                            thptqg: [
                                                                ...formState.admission
                                                                    .thptqg,
                                                                item,
                                                            ],
                                                        };
                                                    if (!event.target.checked) {
                                                        newAdmissionState.thptqg =
                                                            filterArray(
                                                                newAdmissionState.thptqg,
                                                                item
                                                            );
                                                    }
                                                    dispatch(
                                                        updateAdmissionSchema(
                                                            newAdmissionState
                                                        )
                                                    );
                                                }}
                                            />
                                        );
                                    })}
                                </Form.Group>
                            </Col>

                            <Col md>
                                <Form.Group>
                                    <Form.Label>Xét tuyển hồ sơ</Form.Label>
                                    {xthsOptions.map((item: string, index) => {
                                        return (
                                            <Form.Check
                                                label={item}
                                                key={index}
                                                type="checkbox"
                                                id={item}
                                                onChange={(
                                                    event: React.ChangeEvent<HTMLInputElement>
                                                ) => {
                                                    const newAdmissionState: AdmissionSchema =
                                                        {
                                                            ...formState.admission,
                                                            xths: [
                                                                ...formState.admission.xths,
                                                                item,
                                                            ],
                                                        };
                                                    if (!event.target.checked) {
                                                        newAdmissionState.xths =
                                                            filterArray(
                                                                newAdmissionState.xths,
                                                                item
                                                            );
                                                    }
                                                    dispatch(
                                                        updateAdmissionSchema(
                                                            newAdmissionState
                                                        )
                                                    );
                                                }}
                                            />
                                        );
                                    })}
                                </Form.Group>
                            </Col>

                            <Col md>
                                <Form.Group>
                                    <Form.Label>Đánh giá năng lực (Thi riêng)</Form.Label>
                                    {dgnlOptions.map((item: string, index) => {
                                        return (
                                            <Form.Check
                                                label={item}
                                                key={index}
                                                type="checkbox"
                                                id={item}
                                                onChange={(
                                                    event: React.ChangeEvent<HTMLInputElement>
                                                ) => {
                                                    const newAdmissionState: AdmissionSchema =
                                                        {
                                                            ...formState.admission,
                                                            dgnl: [
                                                                ...formState.admission.dgnl,
                                                                item,
                                                            ],
                                                        };
                                                    if (!event.target.checked) {
                                                        newAdmissionState.dgnl =
                                                            filterArray(
                                                                newAdmissionState.dgnl,
                                                                item
                                                            );
                                                    }
                                                    dispatch(
                                                        updateAdmissionSchema(
                                                            newAdmissionState
                                                        )
                                                    );
                                                }}
                                            />
                                        );
                                    })}
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Group>
                                    <Form.Label>Các phương thức khác</Form.Label>
                                    {otherOptions.map((item: string, index) => {
                                        return (
                                            <Form.Check
                                                label={item}
                                                key={index}
                                                type="checkbox"
                                                id={item}
                                                onChange={(
                                                    event: React.ChangeEvent<HTMLInputElement>
                                                ) => {
                                                    const newAdmissionState: AdmissionSchema =
                                                        {
                                                            ...formState.admission,
                                                            otherMethod: [
                                                                ...formState.admission
                                                                    .otherMethod,
                                                                item,
                                                            ],
                                                        };
                                                    if (!event.target.checked) {
                                                        newAdmissionState.otherMethod =
                                                            filterArray(
                                                                newAdmissionState.otherMethod,
                                                                item
                                                            );
                                                    }
                                                    dispatch(
                                                        updateAdmissionSchema(
                                                            newAdmissionState
                                                        )
                                                    );
                                                }}
                                            />
                                        );
                                    })}
                                </Form.Group>
                            </Col>
                        </Row>
                    </section>
                    <section>
                        <Row className="gap-3">
                            <Col md>
                                <Form.Group>
                                    <Form.Label>Địa chỉ</Form.Label>
                                    <Alert variant="warning">
                                        Địa chỉ đầy đủ của trường
                                        <br/>
                                        Viết hoa đầu dòng, các cơ sở cách nhau băng dấu ";"
                                        <br/>
                                        Ví dụ: 268 Lý Thường Kiệt, Q.10, TP.HCM;...
                                    </Alert>
                                    <Form.Control
                                        onBlur={_addressFocus}
                                        isInvalid={_addressValidator}
                                        as="textarea"
                                        value={formState.contact.address[0]}
                                        onChange={(
                                            event: React.ChangeEvent<HTMLInputElement>
                                        ) => {
                                            const newContactState: ContactSchema = {
                                                ...formState.contact,
                                                address: [event.target.value],
                                            };
                                            const newFacilityState: FacilitySchema = {
                                                ...formState.facility,
                                                branches: [event.target.value],
                                            };
                                            dispatch(updateContactSchema(newContactState));
                                            dispatch(
                                                updateFacilitySchema(newFacilityState)
                                            );
                                        }}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Alert variant="warning" style={{height: "100%"}}>
                                        Email liên hệ của trường
                                        <br/>
                                        Các email cách nhau 1 dấu ";", tối thiểu 1 email
                                        <br/>
                                        Ví dụ: aao@hcmut.edu.vn;oisp@hcmut.edu.vn
                                        <br/>
                                    </Alert>
                                    <Form.Control
                                        onBlur={_emailFocus}
                                        isInvalid={_emailValidator}
                                        as="textarea"
                                        style={{height: "auto"}}
                                        value={formState.contact.contactEmail[0]}
                                        onChange={(
                                            event: React.ChangeEvent<HTMLInputElement>
                                        ) => {
                                            const newContactState: ContactSchema = {
                                                ...formState.contact,
                                                contactEmail: [event.target.value],
                                            };
                                            dispatch(updateContactSchema(newContactState));
                                        }}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Group>
                                    <Form.Label>Website</Form.Label>
                                    <Alert variant="warning" style={{height: "100%"}}>
                                        Website của trường
                                        <br/>
                                        Các website cách nhau 1 dấu ";", tối thiểu 1 website
                                        <br/>
                                        Ví dụ: oisp.hcmut.edu.vn;aao.hcmut.edu.vn
                                        <br/>
                                    </Alert>
                                    <Form.Control
                                        onBlur={_websiteFocus}
                                        isInvalid={_websiteValidator}
                                        as="textarea"
                                        style={{height: "auto"}}
                                        value={formState.contact.mainWebsite[0]}
                                        onChange={(
                                            event: React.ChangeEvent<HTMLInputElement>
                                        ) => {
                                            const newContactState: ContactSchema = {
                                                ...formState.contact,
                                                mainWebsite: [event.target.value],
                                            };
                                            dispatch(updateContactSchema(newContactState));
                                        }}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="gap-3 mt-4">
                            <Col md>
                                <Form.Group>
                                    <Form.Label>Số điện thoại</Form.Label>
                                    <Alert variant="warning">
                                        Số điện thoại của trường
                                        <br/>
                                        Cách nhau băng dấu ";", tối thiếu 1 SDT
                                        <br/>
                                        Ví dụ: (023) 456 789;...
                                    </Alert>
                                    <Form.Control
                                        onBlur={_phoneFocus}
                                        isInvalid={_phoneValidator}
                                        as="textarea"
                                        value={formState.contact.contactNumber[0]}
                                        onChange={(
                                            event: React.ChangeEvent<HTMLInputElement>
                                        ) => {
                                            const newContactState: ContactSchema = {
                                                ...formState.contact,
                                                contactNumber: [event.target.value],
                                            };
                                            dispatch(updateContactSchema(newContactState));
                                        }}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Group>
                                    <Form.Label>Mã trường</Form.Label>
                                    <Alert variant="warning">
                                        Mã trường
                                        <br/>
                                        Cách nhau băng dấu ";", tối thiếu 1 mã trường
                                        <br/>
                                        Ví dụ: QSB;ABC
                                    </Alert>
                                    <Form.Control
                                        onBlur={_schoolCodeFocus}
                                        isInvalid={_schoolCodeValidator}
                                        as="textarea"
                                        value={formState.contact.schoolCode[0]}
                                        onChange={(
                                            event: React.ChangeEvent<HTMLInputElement>
                                        ) => {
                                            const newContactState: ContactSchema = {
                                                ...formState.contact,
                                                schoolCode: [event.target.value],
                                            };
                                            dispatch(updateContactSchema(newContactState));
                                        }}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </section>
                    <section>
                        <Form.Group>
                            <Form.Label>Các ngành học</Form.Label>
                            <Alert variant="warning">
                                Các ngành học viết hoa đầu câu, cách nhau bởi dấu ";"
                                <br/>
                                Không cần ghi điểm (tạm thời chỉ demo thôi nên điểm sẽ được
                                random hết)
                                <br/>
                                Ví dụ: Khoa học máy tính;Công nghệ sinh học;Quản lý công
                                nghiệp;...
                            </Alert>
                            <Form.Control
                                onBlur={_allMajorListFocus}
                                isInvalid={_allMajorListValidator}
                                as="textarea"
                                value={formState.major.allMajorList[0]}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    const newMajorState: MajorListSchema = {
                                        ...formState.major,
                                        allMajorList: [event.target.value],
                                    };
                                    dispatch(updateMajorSchema(newMajorState));
                                }}
                            />
                        </Form.Group>
                    </section>
                    <Button type="button" variant="success" onClick={handleSubmit} disabled={!submissable}>
                        Nhập lên cơ sở dữ liệu
                    </Button>
                </Form>
            </section>
        );
    };

export default AdminForm;
