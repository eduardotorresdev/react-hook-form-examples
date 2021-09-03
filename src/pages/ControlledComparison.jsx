import { useState } from "react";
import { useForm } from "react-hook-form";

const ControlledComparison = () => {
    const { register, handleSubmit, watch } = useForm();
    const [fields, setFields] = useState({});
    const [dataSubmitted, setDataSubmitted] = useState({});

    const onSubmit = (data) => {
        setDataSubmitted(data);
    }

    const handleField = (e) => {
        setFields((fields) => ({
            ...fields,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="row">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Inputs controlados</h2>
                <div className="header">
                    <h4>Watching</h4>
                    <ul>
                        <li>Nome: {fields['name']}</li>
                        <li>E-mail: {fields['email']}</li>
                    </ul>
                    <h4>Dados</h4>
                    <pre>{JSON.stringify(fields, null, "\t")}</pre>
                </div>
                <div className="form__group">
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" name="name" onInput={(e) => handleField(e)} />
                </div>
                <div className="form__group">
                    <label htmlFor="email">E-mail</label>
                    <input type="text" id="email" name="email" onInput={(e) => handleField(e)} />
                </div>
                <div className="form__group">
                    <label htmlFor="subject">Assunto</label>
                    <input type="text" id="subject" name="subject" onInput={(e) => handleField(e)} />
                </div>
                <div className="form__group">
                    <label htmlFor="message">Mensagem</label>
                    <textarea id="message" name="message" onInput={(e) => handleField(e)} ></textarea>
                </div>

                <button>Enviar</button>
            </form>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>React Hook Form</h2>
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
        </div>

    );
}

export default ControlledComparison;