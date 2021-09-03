import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import TextArea from "../components/TextArea";

type ContactData = {
    name: string,
    email: string,
    subject: string,
    message: string,
};

const WithCustomComponent: React.FC = () => {
    const { register, handleSubmit, watch } = useForm<ContactData>();
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
            <Input label="Nome" {...register("name")} />
            <Input label="E-mail" {...register("email")} />
            <Input label="Assunto" {...register("subject")} />
            <TextArea label="Mensagem" {...register("message")}/>

            <button>Enviar</button>
        </form>
    );
}

export default WithCustomComponent;