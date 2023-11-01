import { useField } from 'formik'

function CustomCheckbox({label,...props}) {
    const [field,meta] = useField(props);
    console.log(field)
    console.log(meta)
  return (
    <>
        <div className='checkbox'>
        <input {...field} {...props} className={meta.error ? 'input-error':''}/>
        <span>I agree to the terms of use.</span>
        </div>
        {meta.error && <div className='error'>{meta.error}</div>}
    </>
  )
}

export default CustomCheckbox