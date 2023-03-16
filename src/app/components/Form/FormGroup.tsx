import { useState } from "react";
import { Form } from "react-bootstrap";
import { EMPTY_STRING } from "../../utilities/constant";
import { FORM_TYPE } from "../../utilities/enums";

interface Props {
    type: FORM_TYPE,
    title?: string,
    placeholder?: string,
    value?: string,
    className?: string,
    margin?: string,
    width?: "w-25" | "w-50" | "w-75" | "w-100",
    onChange: (value: string) => void,
}

const FormGroup = ({ onChange, title, placeholder, type, value, className, margin = "mb-3", width = "w-100" }: Props) => {
    const [isInputEmpty, setIsInputEmpty] = useState<boolean>(false);

    return (
        <div className={`${margin} ${className} ${width}`}>
            <Form.Group>
                {
                    title && <Form.Label>{title}</Form.Label>
                }
                <Form.Control
                    type={type}
                    placeholder={placeholder}
                    className="py-3"
                    value={value}
                    isInvalid={isInputEmpty}
                    onChange={(evt) => {
                        setIsInputEmpty(evt.target.value == EMPTY_STRING ? true : false);
                        return (onChange(evt.target.value));
                    }}
                />
                {isInputEmpty &&
                    <Form.Control.Feedback type="invalid">
                        {`${title ? title : "This field"} is required`}
                    </Form.Control.Feedback>
                }
            </Form.Group>
        </div >
    )
}

export default FormGroup;