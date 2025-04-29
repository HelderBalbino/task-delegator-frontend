import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LuClipboardList } from 'react-icons/lu';

interface FormProps {
	onSubmit: (values: {
		email: string;
		password: string;
	}) => Promise<void | { email?: string; password?: string }>;
}
