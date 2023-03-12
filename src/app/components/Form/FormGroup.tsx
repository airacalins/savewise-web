import { useState } from "react";
import { Form } from "react-bootstrap";
import { EMPTY_STRING } from "../../utilities/constant";
import { FORM_TYPE } from "../../utilities/enums";

interface Props {
    title: string,
    type: FORM_TYPE,
    className?: string
    width?: "w-25" | "w-50" | "w-75" | "w-100",
    onChange: (value: string) => void,
}

const FormGroup = ({ onChange, title, type, className, width = "w-100" }: Props) => {
    const [isInputEmpty, setIsInputEmpty] = useState<boolean>(false);

    return (
        <div className={`mb-3 ${className} ${width}`}>
            <Form.Group>
                <Form.Label>{title}</Form.Label>
                <Form.Control
                    type={type}
                    placeholder={title}
                    onChange={(evt) => {
                        setIsInputEmpty(evt.target.value == EMPTY_STRING ? true : false);
                        return (onChange(evt.target.value));
                    }}
                    isInvalid={isInputEmpty}
                />
                {isInputEmpty &&
                    <Form.Control.Feedback type="invalid">
                        {`${title} is required`}
                    </Form.Control.Feedback>
                }
            </Form.Group>
        </div >
    )
}

export default FormGroup;