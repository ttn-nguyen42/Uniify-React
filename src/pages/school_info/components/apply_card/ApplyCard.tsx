import style from "./ApplyCard.module.scss";

import Button from "react-bootstrap/Button";
import Bullet from "../../../../components/header/bullets/Bullet";

import { faCheck, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FC, useState } from "react";
import { ApplyPillProps } from "../../../../util/types/Interface";

const ApplyCard: FC<ApplyPillProps> = (props) => {
    const { contact, id, favorite } = props;
    const [favorited, updateFavoriteState] = useState<boolean>(favorite);

    const addToFavoriteList = () => {
        if (!favorited) {
            updateFavoriteState(true);
            // Update user preference here
        }
    };

    const applyHandler = () => {
        console.log(id);
    };

    const contactNow = () => {
        console.log(id);
        console.log(contact.contactEmail[0]);
    };

    return (
        <div className={style.apply}>
            <div className={`${style.floating} ${"border"}`}>
                <div className="d-grid gap-2">
                    <Button
                        variant="warning"
                        size="lg"
                        className="py-3"
                        onClick={applyHandler}
                    >
                        Nộp hồ sơ ngay
                    </Button>
                    <div className={style.favorite}>
                        <div className={style.fav}>
                            <Button
                                variant={
                                    !favorited ? "danger" : "outline-danger"
                                }
                                size="lg"
                                className={`py-3 ${style["full-width"]}`}
                                onClick={addToFavoriteList}
                                active={favorited}
                                disabled={favorited}
                            >
                                <FontAwesomeIcon
                                    icon={!favorited ? faHeart : faCheck}
                                    size="1x"
                                />
                            </Button>
                        </div>
                        <div className={`${style.cont} ps-2`}>
                            <Button
                                variant="outline-dark"
                                size="lg"
                                className={`py-3 ${style["full-width"]}`}
                                onClick={contactNow}
                            >
                                Liên hệ ngay
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={style.details}>
                    <h3>Ban tuyển sinh</h3>
                    <Bullet heading="Mã trường" content={contact.schoolCode} />
                    <Bullet heading="Địa chỉ" content={contact.address} />
                    <Bullet heading="Email" content={contact.contactEmail} />
                    <Bullet
                        heading="Số điện thoại"
                        content={contact.contactNumber}
                    />
                    <Bullet heading="Website" content={contact.mainWebsite} />
                </div>
            </div>
        </div>
    );
};

export default ApplyCard;
