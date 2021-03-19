const SuccessAlert = ({success}) => {

    return (

        <div className="mt-3">
            {success ? (
                <div>
                    <div className='alert alert-success text-center' role='alert'>
                    You've successfully added a new quest!
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>

    );

}

export default SuccessAlert;