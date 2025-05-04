import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LuClipboardList } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

// define the props for the form
interface FormProps {
	onSubmit: (values: {
		name: string;
		email: string;
		password: string;
		sector_name: string;
		company_name: string;
	}) => Promise<void | { [key: string]: string }>;
}

function Form({ onSubmit }: FormProps) {
	const navigate = useNavigate();

	const validationSchema = Yup.object({
		name: Yup.string().required('Name is required'),
		email: Yup.string()
			.email('Invalid Email')
			.required('Email is required'),
		password: Yup.string()
			.min(6, 'Password must be at least 6 characters')
			.required('Password is required'),
		sector_name: Yup.string().required('Sector is required'),
		company_name: Yup.string().required('Company is required'),
	});
}
