import Image from '../images/certificazioni.jpg'; 
import Doc from '../documents/certificazione.pdf'

export default function Certification() {
  return (
    <div className="text-center p-4">
      {/* Title */}
      <h2 className="text-xl font-semibold mb-2">Certificazione ISO 9001</h2>

      {/* Image Section */}
      <div className="flex justify-center mb-2">
        <img
          src={Image}
          alt="Certificazione ISO 9001"
          className="w-64 h-auto"
        />
      </div>

      {/* Download Link */}
      <a
        href={Doc}
        download
        className="text-blue-600 underline hover:text-blue-800"
      >
        Clicca per scaricare la certificazione
      </a>
    </div>
  );
}