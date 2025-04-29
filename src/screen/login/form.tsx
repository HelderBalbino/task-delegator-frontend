import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LuClipboardList } from 'react-icons/lu';


// define the components props  
interface FormProps {
	onSubmit: (values: {
		email: string;
		password: string;
	}) => Promise<void | { email?: string; password?: string }>;
}

function Form({ onSubmit }: FormProps) {
    //yup validation schema
    const validationSchema = Yup.object({
      email: Yup.string().email("Email inválido").required("Email é obrigatório"),
      password: Yup.string()
        .min(6, "A senha deve ter pelo menos 6 caracteres")
        .required("Senha é obrigatória"),
    });


    // Formik configuration
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (
      values: { email: string; password: string },
      { setErrors }: { setErrors: (errors: any) => void }
    ) => {
      const errors = await onSubmit(values); // executes the onSubmit function passed as a prop
      // if the onSubmit function returns errors, set them in Formik
      if (errors) {
        setErrors(errors); // if there are errors, set them in Formik
      }
    },
  });