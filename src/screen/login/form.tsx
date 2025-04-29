import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LuClipboardList } from 'react-icons/lu';

interface FormProps {
	onSubmit: (values: {
		email: string;
		password: string;
	}) => Promise<void | { email?: string; password?: string }>;
}

function Form({ onSubmit }: FormProps) {
    const validationSchema = Yup.object({
      email: Yup.string().email("Email inválido").required("Email é obrigatório"),
      password: Yup.string()
        .min(6, "A senha deve ter pelo menos 6 caracteres")
        .required("Senha é obrigatória"),
    });