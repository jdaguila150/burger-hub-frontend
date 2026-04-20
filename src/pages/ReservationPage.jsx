import ReservationForm from "../components/ReservationForm";

const ReservationPage = () => {
  return (
    <div className="container my-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <h2 className="text-center mb-4">Reserva tu Mesa</h2>
          <p className="text-center mb-5">
            Asegura tu lugar en Burger Hub y disfruta de las mejores hamburguesas.
          </p>
          {/* Aquí renderizamos el componente que ya tienes creado */}
          <ReservationForm />
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;