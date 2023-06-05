import * as yup from "yup";

export const userSchema = yup.object().shape({
	name: yup.string().min(5).required(),
	password: yup.string().min(4).required(),
});
