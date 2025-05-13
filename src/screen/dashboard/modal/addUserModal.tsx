import { useFormik } from 'formik';
import * as Yup from 'yup';
import { registerUser } from '../../../services/userService';

interface AddUserModalProps {
	onClose: () => void;
}
