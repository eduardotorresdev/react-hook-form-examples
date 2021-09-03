import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import validation from '../utils/validation';

type ContactData = {
    name: string,
    email: string,
    subject: string,
    message: string,
    phones: {
        number: string;
    }[],
};

let schema = validation.object().shape({
    name: validation.string().required().required().label('Nome'),
    email: validation.string().required().email().label('E-mail'),
    subject: validation.string().required().max(255).label('Assunto'),
    message: validation.string().required().label('Mensagem'),
    phones: validation.array()
        .of(
            validation.object().shape({
                number: validation.string().min(14).label('Número'),
            }).label('Telefone')
        ),
});

const WithDynamicFields: React.FC = () => {
    const { register, control, handleSubmit, watch, formState: { errors } } = useForm<ContactData>({
        resolver: yupResolver(schema),
        defaultValues: {
            phones: [
                {
                    number: '(99) 99999-9999'
                }
            ]
        }
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'phones',
    });

    const [dataSubmitted, setDataSubmitted] = useState<ContactData>();

    const onSubmit = (data: ContactData) => {
        setDataSubmitted({
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
            phones: data.phones,
        });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="header">
                <h4>Watching</h4>
                <ul>
                    <li>Nome: {watch('name')}</li>
                    <li>E-mail: {watch('email')}</li>
                </ul>
                <h4>Dados</h4>
                <pre>{JSON.stringify(dataSubmitted, null, "\t")}</pre>
            </div>
            <Input label="Nome" {...register("name")} error={errors.name} />
            <Input label="E-mail" {...register("email")} error={errors.email} />
            <div className="phones">
                <h3 style={{position: 'relative'}}>
                    Telefones
                    <button type="button" className="btn-sm" onClick={() => append({ number: '' })}>
                        Adicionar
                    </button>
                </h3>
                {fields.map((field, index) => (
                    <div className="phones__group" key={field.id}>
                        <div className="phones__item">
                            <input
                                key={field.id}
                                {...register(`phones.${index}.number`)}
                                defaultValue={field.number}
                            />
                            <button type="button" className="btn-sm btn-danger" onClick={() => remove(index)}>
                                Remover
                            </button>
                        </div>
                        <span className="form__message">
                            {errors?.phones?.at(index)?.number?.message}
                        </span>
                    </div>
                ))}
            </div>
            <Input label="Assunto" {...register("subject")} error={errors.subject} />
            <TextArea label="Mensagem" {...register("message")} error={errors.message} />

            <button>Enviar</button>
        </form>
    );
}

export default WithDynamicFields;