import { useState } from "react";
import { useForm } from "react-hook-form";

const Basic = () => {
    const { register, handleSubmit, watch } = useForm();
    const [dataSubmitted, setDataSubmitted] = useState({});

    const onSubmit = (data) => {
        setDataSubmitted(data);
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
            <div className="form__group">
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" {...register("name")} />
            </div>
            <div className="form__group">
                <label htmlFor="email">E-mail</label>
                <input type="text" id="email" {...register("email")} />
            </div>
            <div className="form__group">
                <label htmlFor="subject">Assunto</label>
                <input type="text" id="subject" {...register("subject")} />
            </div>
            <div className="form__group">
                <label htmlFor="message">Mensagem</label>
                <textarea id="message" {...register("message")}></textarea>
            </div>

            <button>Enviar</button>
        </form>
    );
}

export default Basic;