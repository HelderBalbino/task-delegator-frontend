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
