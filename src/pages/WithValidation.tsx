import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import validation from '../utils/validation';

type ContactData = {
    name: string,
    email: string,
    subject: string,
    message: string,
};

let schema = validation.object().shape({
    name: validation.string().required().required().label('Nome'),
    email: validation.string().required().email().label('E-mail'),
    subject: validation.string().required().max(255).label('Assunto'),
    message: validation.string().required().label('Mensagem'),
});

const WithValidation: React.FC = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<ContactData>({
        resolver: yupResolver(schema)
    });
    const [dataSubmitted, setDataSubmitted] = useState<ContactData>();

    const onSubmit = (data: ContactData) => {
        setDataSubmitted({
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
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
            <Input label="Assunto" {...register("subject")} error={errors.subject} />
            <TextArea label="Mensagem" {...register("message")} error={errors.message} />

            <button>Enviar</button>
        </form>
    );
}

export default WithValidation;