import React from "react";
import { useDispatch, useSelector } from "react-redux";

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
    OverviewSchema,
    SchoolSchema,
} from "../../util/schema/DatabaseSchema";

import {
    updateAdmissionSchema,
    updateContactSchema,
    updateFacilitySchema,
    updateGallerySchema,
    updateHeaderSchema,
    updateMajorSchema,
    updateOverviewSchema,
    updateSchoolSchema,
} from "../../util/state/slice/adminFormSlice";

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
    xthsOptions,
} from "../../util/default/DefaultOptions";

import useValidator from "../../util/hooks/useValidator";
import {
    filterArray,
    slugifyCategory,
    slugifyLocation,
} from "../../util/ultility/UtilityFunctions";
import { inputDataTransformation } from "../../util/ultility/AdminUtility";
import { RootState } from "../../util/state/store/globalStore";
import useCheckboxValidator from "../../util/hooks/useCheckboxValidator";

const cityOptions = locations.map((item: string, index) => {
    const sluggedStringForUrl = slugifyLocation(item);
    return (
        <option key={index} value={sluggedStringForUrl}>
            {item}
        </option>
    );
});

interface AdminFormProps {
    handleRequest: (payload: SchoolSchema) => void;
}

const AdminForm: React.FC<AdminFormProps> = (props) => {
    // Global state management
    const dispatch = useDispatch();
    const formState = useSelector((state: RootState) => state.admin);

    // Form state
    const [_schoolNameFocus, _schoolNameValidator, _schoolNameState] =
        useValidator(formState.header.schoolName);
    const [_englishNameFocus, _englishNameValidator, _englishNameState] =
        useValidator(formState.header.schoolName);
    const [_shortLocationFocus, _shortLocationValidator, _shortLocationState] =
        useValidator(formState.shortLocation);
    const [_locationCityFocus, _locationCityValidator, _locationCityState] =
        useValidator(formState.locationCity);
    const [_descriptionFocus, _descriptionValidator, _descriptionState] =
        useValidator(formState.overview.description);
    const [_facilityImageFocus, _facilityImageValidator, _facilityImageState] =
        useValidator(formState.overview.facilityImage[0]);
    const [_mainImageFocus, _mainImageValidator, _mainImageState] =
        useValidator(formState.gallery.mainImage);
    const [_sideImage1Focus, _sideImage1Validator, _sideImage1State] =
        useValidator(formState.gallery.sideImage1);
    const [_sideImage2Focus, _sideImage2Validator, _sideImage2State] =
        useValidator(formState.gallery.sideImage2);
    const [_addressFocus, _addressValidator, _addressState] = useValidator(
        formState.contact.address[0]
    );
    const [_emailFocus, _emailValidator, _emailState] = useValidator(
        formState.contact.contactEmail[0]
    );
    const [_websiteFocus, _websiteValidator, _websiteState] = useValidator(
        formState.contact.mainWebsite[0]
    );
    const [_phoneFocus, _phoneValidator, _phoneState] = useValidator(
        formState.contact.contactNumber[0]
    );
    const [_schoolCodeFocus, _schoolCodeValidator, _schoolCodeState] =
        useValidator(formState.contact.schoolCode[0]);
    const [_allMajorListFocus, _allMajorListValidator, _allMajorListState] =
        useValidator(formState.major.allMajorList[0]);

    // Checkbox state
    const _subjectOfEducationState = useCheckboxValidator(
        formState.overview.subjectOfEducation
    );
    const _programsState = useCheckboxValidator(formState.overview.programs);
    const _entryMonthState = useCheckboxValidator(
        formState.overview.entryMonth
    );
    const _studyTimeOptionsState = useCheckboxValidator(
        formState.overview.studyTime
    );
    const _supportingFacilityState = useCheckboxValidator(
        formState.facility.supportingFacility
    );
    const _labOptionsState = useCheckboxValidator(formState.facility.labs);
    const _thptState = useCheckboxValidator(formState.admission.thptqg);
    const _xthsState = useCheckboxValidator(formState.admission.xths);
    const _dgnlState = useCheckboxValidator(formState.admission.dgnl);
    const _otherMethodState = useCheckboxValidator(
        formState.admission.otherMethod
    );

    // State check form controls
    const validated =
        !_schoolCodeValidator &&
        !_englishNameValidator &&
        !_shortLocationValidator &&
        !_locationCityValidator &&
        !_descriptionValidator &&
        !_facilityImageValidator &&
        !_mainImageValidator &&
        !_sideImage1Validator &&
        !_sideImage2Validator &&
        !_addressValidator &&
        !_emailValidator &&
        !_websiteValidator &&
        !_phoneValidator &&
        !_schoolNameValidator &&
        !_allMajorListValidator;

    // State check checkboxes
    const checkboxValidated =
        _subjectOfEducationState &&
        _programsState &&
        _entryMonthState &&
        _studyTimeOptionsState &&
        _supportingFacilityState &&
        _labOptionsState &&
        _thptState &&
        _xthsState &&
        _dgnlState &&
        _otherMethodState;

    // Focus state check (form controls)
    const focussed =
        _schoolNameState &&
        _englishNameState &&
        _shortLocationState &&
        _locationCityState &&
        _descriptionState &&
        _facilityImageState &&
        _mainImageState &&
        _sideImage1State &&
        _sideImage2State &&
        _addressState &&
        _emailState &&
        _websiteState &&
        _phoneState &&
        _schoolCodeState &&
        _allMajorListState;

    // Overall form submit-ability
    const submissable = validated && focussed && checkboxValidated;

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (submissable) {
            props.handleRequest(inputDataTransformation(formState));
        }
    };

    return (
        <section className={style.form}>
            <Form>
                <section>
                    <Row className="gap-3">
                        <Col md>
                            <Form.Group>
                                <Form.Label>T??n tr?????ng</Form.Label>
                                <Alert variant="warning">
                                    Vi???t hoa ?????u c??u, ?????y ????? t??n
                                    <br />
                                    V?? d???: Tr?????ng ?????i h???c B??ch khoa TP.HCM;
                                    Tr?????ng ?????i h???c Kinh t??? TP.HCM;...
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
                                        dispatch(
                                            updateHeaderSchema(newHeaderState)
                                        );
                                    }}
                                />
                            </Form.Group>
                        </Col>
                        <Col md>
                            <Form.Group>
                                <Form.Label>T??n ti???ng Anh</Form.Label>
                                <Alert variant="warning">
                                    Vi???t hoa ?????u c??u, ?????y ????? t??n
                                    <br />
                                    V?? d???: Ho Chi Minh University of Technology;
                                    Ho Chi Minh University of Economics;...
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
                                        dispatch(
                                            updateHeaderSchema(newHeaderState)
                                        );
                                    }}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </section>
                <section>
                    <h5>Ph??n lo???i d??? li???u</h5>
                    <p>Th??ng tin s??? d???ng ????? ph??n lo???i d??? li???u</p>
                    <Row className="gap-3">
                        <Col md>
                            <Form.Group>
                                <Form.Label>Th??nh ph???</Form.Label>
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
                                        dispatch(
                                            updateSchoolSchema(currentCityState)
                                        );
                                    }}
                                >
                                    {cityOptions}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md>
                            <Form.Group>
                                <Form.Label>Danh m???c</Form.Label>
                                {categories.map((item: string, index) => {
                                    const sluggedStringForUrl =
                                        slugifyCategory(item);
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
                                                        [sluggedStringForUrl]:
                                                            true,
                                                    },
                                                };
                                                if (!event.target.checked) {
                                                    delete currentCategoryState
                                                        .category[
                                                        sluggedStringForUrl
                                                    ];
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
                                <Form.Label>Qu???n & Th??nh ph???</Form.Label>
                                <Alert variant="warning">
                                    Ng???n g???n, ???????c vi???t t???t <b>Th??nh ph???</b>{" "}
                                    th??nh <b>TP</b>, ph???i vi???t hoa ?????u ch???
                                    <br />
                                    V?? d???: Qu???n 10, TP.HCM; Hai B?? Tr??ng, H??
                                    N???i;...
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
                                        dispatch(
                                            updateSchoolSchema(
                                                currentShortState
                                            )
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
                                <Form.Label>Gi???i thi???u</Form.Label>
                                <Form.Control
                                    style={{ height: "100%" }}
                                    as="textarea"
                                    value={formState.overview.description}
                                    onBlur={_descriptionFocus}
                                    isInvalid={_descriptionValidator}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        const newDescriptionState: OverviewSchema =
                                            {
                                                ...formState.overview,
                                                description: event.target.value,
                                            };
                                        dispatch(
                                            updateOverviewSchema(
                                                newDescriptionState
                                            )
                                        );
                                    }}
                                />
                            </Form.Group>
                        </Col>
                        <Col md>
                            <Form.Group>
                                <Form.Label>C???p ????o t???o</Form.Label>
                                {subjectOfEducationOptions.map(
                                    (item: any, index) => {
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
                                                            subjectOfEducation:
                                                                [
                                                                    ...formState
                                                                        .overview
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
                                    }
                                )}
                            </Form.Group>
                        </Col>
                        <Col md>
                            <Form.Group>
                                <Form.Label>Ch????ng tr??nh ????o t???o</Form.Label>
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
                                                            ...formState
                                                                .overview
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
                                <Form.Label>Th???i gian nh???p h???c</Form.Label>
                                {entryMonthOptions.map(
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
                                                    const newSubjectState: OverviewSchema =
                                                        {
                                                            ...formState.overview,
                                                            entryMonth: [
                                                                ...formState
                                                                    .overview
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
                                    }
                                )}
                            </Form.Group>
                        </Col>
                        <Col md>
                            <Form.Group>
                                <Form.Label>Th???i gian ????o t???o</Form.Label>
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
                                                            ...formState
                                                                .overview
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
                                <Form.Label>???nh c?? s??? v???t ch???t</Form.Label>
                                <Alert variant="warning">
                                    L???y URL ???nh t??? Google, c??ch m???i link s??? d???ng
                                    d???u ";", kh??ng c??ch d??ng, kh??ng whitespace.
                                    T???i thi???u 3 ???nh
                                    <br />
                                    V?? d???: www.url-anh.com/image=600x600<b>;</b>
                                    www.url-anh.com/image=800x300
                                </Alert>
                                <Form.Control
                                    onBlur={_facilityImageFocus}
                                    isInvalid={_facilityImageValidator}
                                    style={{ height: "100%" }}
                                    as="textarea"
                                    value={formState.overview.facilityImage[0]}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        const newImageLinkState: OverviewSchema =
                                            {
                                                ...formState.overview,
                                                facilityImage: [
                                                    event.target.value,
                                                ],
                                            };
                                        dispatch(
                                            updateOverviewSchema(
                                                newImageLinkState
                                            )
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
                                <Form.Label>???nh ch??nh</Form.Label>
                                <Alert variant="warning">
                                    ???nh ???????c ?????t l??m ???nh ch??nh ??? trang profile
                                    ri??ng c???a tr?????ng trong m???c <b>Kh??m ph??</b>
                                    <br />
                                    L???y link ???nh t??? Google (nh??? ph???i l???y URL).
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
                                        dispatch(
                                            updateGallerySchema(newImageState)
                                        );
                                    }}
                                />
                            </Form.Group>
                        </Col>
                        <Col md>
                            <Form.Group>
                                <Form.Label>???nh ph??? 1</Form.Label>
                                <Alert variant="warning">
                                    ???nh ???????c ?????t l??m ???nh b??n ph???i ?????u ti??n ???
                                    trang profile ri??ng c???a tr?????ng trong m???c{" "}
                                    <b>Kh??m ph??</b>
                                    <br />
                                    ???????c d??ng l??m ???nh cho avatar nh??? t???i trang
                                    Explore
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
                                        dispatch(
                                            updateGallerySchema(newImageState)
                                        );
                                    }}
                                />
                            </Form.Group>
                        </Col>
                        <Col md>
                            <Form.Group>
                                <Form.Label>???nh ph??? 2</Form.Label>
                                <Alert variant="warning">
                                    ???nh ???????c ?????t l??m ???nh b??n ph???i th??? 2 ??? trang
                                    profile ri??ng c???a tr?????ng trong m???c{" "}
                                    <b>Kh??m ph??</b>
                                    <br />
                                    Ch??a c?? m???c ????ch kh??c c??? th???
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
                                        dispatch(
                                            updateGallerySchema(newImageState)
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
                                <Form.Label>C?? s??? v???t ch???t h??? tr???</Form.Label>
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
                                                            supportingFacility:
                                                                [
                                                                    ...formState
                                                                        .facility
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
                                <Form.Label>Ph??ng th?? nghi???m</Form.Label>
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
                                                            ...formState
                                                                .facility.labs,
                                                            item,
                                                        ],
                                                    };
                                                if (!event.target.checked) {
                                                    newFacilityState.labs =
                                                        filterArray(
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
                                <Form.Label>Kh???i thi THPTQG</Form.Label>
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
                                                            ...formState
                                                                .admission
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
                                <Form.Label>X??t tuy???n h??? s??</Form.Label>
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
                                                            ...formState
                                                                .admission.xths,
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
                                <Form.Label>
                                    ????nh gi?? n??ng l???c (Thi ri??ng)
                                </Form.Label>
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
                                                            ...formState
                                                                .admission.dgnl,
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
                                <Form.Label>C??c ph????ng th???c kh??c</Form.Label>
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
                                                            ...formState
                                                                .admission
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
                                <Form.Label>?????a ch???</Form.Label>
                                <Alert variant="warning">
                                    ?????a ch??? ?????y ????? c???a tr?????ng
                                    <br />
                                    Vi???t hoa ?????u d??ng, c??c c?? s??? c??ch nhau b??ng
                                    d???u ";"
                                    <br />
                                    V?? d???: 268 L?? Th?????ng Ki???t, Q.10, TP.HCM;...
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
                                        const newFacilityState: FacilitySchema =
                                            {
                                                ...formState.facility,
                                                branches: [event.target.value],
                                            };
                                        dispatch(
                                            updateContactSchema(newContactState)
                                        );
                                        dispatch(
                                            updateFacilitySchema(
                                                newFacilityState
                                            )
                                        );
                                    }}
                                />
                            </Form.Group>
                        </Col>
                        <Col md>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Alert
                                    variant="warning"
                                    style={{ height: "100%" }}
                                >
                                    Email li??n h??? c???a tr?????ng
                                    <br />
                                    C??c email c??ch nhau 1 d???u ";", t???i thi???u 1
                                    email
                                    <br />
                                    V?? d???: aao@hcmut.edu.vn;oisp@hcmut.edu.vn
                                    <br />
                                </Alert>
                                <Form.Control
                                    onBlur={_emailFocus}
                                    isInvalid={_emailValidator}
                                    as="textarea"
                                    style={{ height: "auto" }}
                                    value={formState.contact.contactEmail[0]}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        const newContactState: ContactSchema = {
                                            ...formState.contact,
                                            contactEmail: [event.target.value],
                                        };
                                        dispatch(
                                            updateContactSchema(newContactState)
                                        );
                                    }}
                                />
                            </Form.Group>
                        </Col>
                        <Col md>
                            <Form.Group>
                                <Form.Label>Website</Form.Label>
                                <Alert
                                    variant="warning"
                                    style={{ height: "100%" }}
                                >
                                    Website c???a tr?????ng
                                    <br />
                                    C??c website c??ch nhau 1 d???u ";", t???i thi???u 1
                                    website
                                    <br />
                                    V?? d???: oisp.hcmut.edu.vn;aao.hcmut.edu.vn
                                    <br />
                                </Alert>
                                <Form.Control
                                    onBlur={_websiteFocus}
                                    isInvalid={_websiteValidator}
                                    as="textarea"
                                    style={{ height: "auto" }}
                                    value={formState.contact.mainWebsite[0]}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        const newContactState: ContactSchema = {
                                            ...formState.contact,
                                            mainWebsite: [event.target.value],
                                        };
                                        dispatch(
                                            updateContactSchema(newContactState)
                                        );
                                    }}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="gap-3 mt-4">
                        <Col md>
                            <Form.Group>
                                <Form.Label>S??? ??i???n tho???i</Form.Label>
                                <Alert variant="warning">
                                    S??? ??i???n tho???i c???a tr?????ng
                                    <br />
                                    C??ch nhau b??ng d???u ";", t???i thi???u 1 SDT
                                    <br />
                                    V?? d???: (023) 456 789;...
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
                                        dispatch(
                                            updateContactSchema(newContactState)
                                        );
                                    }}
                                />
                            </Form.Group>
                        </Col>
                        <Col md>
                            <Form.Group>
                                <Form.Label>M?? tr?????ng</Form.Label>
                                <Alert variant="warning">
                                    M?? tr?????ng
                                    <br />
                                    C??ch nhau b??ng d???u ";", t???i thi???u 1 m??
                                    tr?????ng
                                    <br />
                                    V?? d???: QSB;ABC
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
                                        dispatch(
                                            updateContactSchema(newContactState)
                                        );
                                    }}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </section>
                <section>
                    <Form.Group>
                        <Form.Label>C??c ng??nh h???c</Form.Label>
                        <Alert variant="warning">
                            C??c ng??nh h???c vi???t hoa ?????u c??u, c??ch nhau b???i d???u
                            ";"
                            <br />
                            Kh??ng c???n ghi ??i???m (t???m th???i ch??? demo th??i n??n ??i???m
                            s??? ???????c random h???t)
                            <br />
                            V?? d???: Khoa h???c m??y t??nh;C??ng ngh??? sinh h???c;Qu???n l??
                            c??ng nghi???p;...
                        </Alert>
                        <Form.Control
                            onBlur={_allMajorListFocus}
                            isInvalid={_allMajorListValidator}
                            as="textarea"
                            value={formState.major.allMajorList[0]}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                const newMajorState: MajorListSchema = {
                                    ...formState.major,
                                    allMajorList: [event.target.value],
                                };
                                dispatch(updateMajorSchema(newMajorState));
                            }}
                        />
                    </Form.Group>
                </section>
                <Button
                    type="button"
                    variant="success"
                    onClick={handleSubmit}
                    disabled={!submissable}
                >
                    Nh???p l??n c?? s??? d??? li???u
                </Button>
            </Form>
        </section>
    );
};

export default AdminForm;
