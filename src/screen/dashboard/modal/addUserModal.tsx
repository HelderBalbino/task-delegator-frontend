import { useFormik } from 'formik';
import * as Yup from 'yup';
import { registerUser } from '../../../services/userService';

// define the modal props
interface AddUserModalProps {
	onClose: () => void; // function to close the modal
}

const AddUserModal = ({ onClose }: AddUserModalProps) => {
	const validationSchema = Yup.object({
		name: Yup.string().required('Name is required'),
		email: Yup.string()
			.email('Invalid Email')
			.required('Email is required'),
		password: Yup.string()
			.min(6, 'Password must be at least 6 characters')
			.required('Password is required'),
	});
};
