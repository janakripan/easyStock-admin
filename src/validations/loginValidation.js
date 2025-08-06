import * as Yup from 'yup';


 
export const loginSchema = Yup.object({
    tenantName: Yup.string()
      .required('Tenant name is required'),
    userCode: Yup.string()
      .required('User code is required'),
    password: Yup.string()
      .min(3, 'Password must be at least 3 characters')
      .required('Password is required'),
  });