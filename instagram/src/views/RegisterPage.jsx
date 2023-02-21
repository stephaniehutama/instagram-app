import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="d-flex justify-content-center">
      <div
        style={{ margin: 30, borderRadius: 30, width: 500 }}
        className="d-flex-column justify-content-center border pt-5"
      >
        <div className="d-flex justify-content-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
            alt=""
            style={{ width: 200 }}
          />
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}
