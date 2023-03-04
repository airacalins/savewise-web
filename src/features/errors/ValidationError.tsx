interface Props {
  errors: string[];
}

const ValidationError = ({ errors }: Props) => {
  return (
    <>
      {
        errors && <div>
          {errors.map((error: string, index) =>
            <li key={index}>
              {error}
            </li>)}
        </div>
      }
    </>
  )
}

export default ValidationError;