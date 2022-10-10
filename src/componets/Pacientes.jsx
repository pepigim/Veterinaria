const Pacientes = () => {
    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                {" "}
                Nombre: {""}
                <span className="font-normal normal-case">Hook</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                {" "}
                Propietario: {""}
                <span className="font-normal normal-case">Juan</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                {" "}
                Email: {""}
                <span className="font-normal normal-case"> correo@correo.com</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                {" "}
                Fecha de Alta: {""}
                <span className="font-normal normal-case">10 De Agosto de 2022</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                {" "}
                Sintomas: {""}
                <span className="font-normal normal-case">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only.
                </span>
            </p>
        </div>
    );
};

export default Pacientes;
