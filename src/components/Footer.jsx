import { styles } from "../styles";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-3">
          <p className="text-[16px] mb-2">Icons by <a href="https://icons8.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-300">Icons8</a></p>
          <p className="text-[16px]">"Space exploration [WLP series #8]" by <a href="https://skfb.ly/JIPA" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-300">Shapernode</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-300">Creative Commons Attribution</a></p>
        </div>
        <div>
          <p className="text-[16px]">© 2023 Anton Kucherenko. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer
