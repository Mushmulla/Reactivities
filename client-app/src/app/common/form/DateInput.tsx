import React from 'react'
import { FieldRenderProps } from 'react-final-form';
import { FormFieldProps, Form, Label } from 'semantic-ui-react';
import {DateTimePicker} from 'react-widgets';
import { stringifyKey } from 'mobx/dist/internal';

interface IProps
  extends FieldRenderProps<Date, HTMLElement>,
    FormFieldProps {}

const DateInput: React.FC<IProps> = ({
    input,
    width,
    placeholder,
    id,
    date = false,
    time = false,
    meta: { touched, error },
    ...rest
  }) => {
    return (
        <Form.Field error={touched && !!error} width={width}>
        <DateTimePicker
            id={String(id)} 
            placeholder={placeholder}
            value={input.value || null}
            onChange={input.onChange}
            onBlur={input.onBlur}
            onKeyDown={(e) => e.preventDefault()}
            date={date}
            time={time}
            {...rest}
        />
        {touched && error && (
          <Label basic color='red'>
            {error}
          </Label>
        )}
      </Form.Field>
    )
}

export default DateInput