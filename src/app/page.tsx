export default function Home() {


  return (
    <div>
      <p>home</p>
      <div className="flex flex-col md:flex-row items-center gap-6 p-6">
        <img src="https://talkers.cl/images/logo/Full%20logo%20ajustado.svg" alt="Ejemplo" className="w-full md:w-1/2 rounded-lg shadow-lg" />
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Título del contenido</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac risus sollicitudin, egestas mauris et, elementum ligula. Curabitur porta, magna quis dignissim sodales, est mi sodales sapien, vitae cursus arcu felis imperdiet sapien. Nulla eget tellus vulputate, blandit est dapibus, tincidunt est. Donec non auctor mi, et porttitor magna. Quisque molestie lacus gravida, sollicitudin sapien eget, lacinia orci. Pellentesque in maximus tellus. Proin pulvinar odio eget ante fermentum efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In interdum, lorem eu euismod tristique, arcu nibh rutrum quam, vel mollis enim velit vitae nulla. Ut sollicitudin vitae eros nec aliquet. Sed finibus, nisi eu interdum imperdiet, eros ex tempor nisl, non viverra purus quam vitae ipsum. Nullam augue eros, pharetra quis libero vel, placerat sollicitudin justo. Nulla sed commodo magna. Ut sit amet ex placerat, aliquet nunc at, ultrices augue.

            Phasellus tortor dolor, vestibulum eget tincidunt eget, porta non urna. Duis scelerisque fermentum mauris. Maecenas a mattis erat. Mauris faucibus eget leo et ultrices. Donec ex velit, egestas vitae orci consectetur, posuere consectetur augue. Nunc justo tellus, volutpat sed porta nec, maximus ut sem. Curabitur dapibus risus fringilla odio dictum mollis. Donec id ultrices ante. Sed semper sem id auctor feugiat. Duis molestie urna lacinia nisl vestibulum pellentesque. Pellentesque pharetra nunc et leo scelerisque tempor. Pellentesque libero magna, fermentum sit amet aliquet vitae, luctus at felis. Aliquam nec dui sit amet purus pulvinar consequat et sed urna.

            Vestibulum ac urna sit amet risus mollis consectetur venenatis at est. Nulla accumsan lectus eget dapibus luctus. Phasellus ligula diam, pharetra gravida sapien nec, fermentum porttitor sapien. Integer dapibus odio sed ante laoreet, vel cursus est sodales. Vivamus tempus mattis nisi at blandit. Vestibulum congue nunc quis fringilla luctus. Ut laoreet porttitor luctus. Quisque interdum est quis elit accumsan tempor. Suspendisse potenti. Fusce sodales eget nulla sed semper. Sed eu rhoncus risus. Donec sit amet rutrum turpis. Curabitur elit justo, imperdiet imperdiet urna at, aliquam tempus purus. Vivamus sit amet euismod mi.

            Morbi porttitor quis est vulputate pharetra. Proin ac sapien felis. Pellentesque at faucibus lectus. Aliquam condimentum sem urna, eget accumsan magna varius sed. Sed euismod ullamcorper urna laoreet scelerisque. Duis ut lacus erat. Maecenas iaculis nisl nec nunc vestibulum, eu imperdiet neque consectetur. Sed ligula augue, porttitor id mauris in, porttitor placerat tortor.

            Donec varius orci facilisis metus ultrices imperdiet. Integer sodales ex vel sem imperdiet lacinia. Sed quis pellentesque risus. Curabitur tempus volutpat nulla at scelerisque. Nulla sed turpis nec neque blandit mattis. Quisque eget consectetur turpis. Vivamus feugiat sollicitudin quam quis tempus. Nunc urna nibh, mollis id eros et, volutpat ultricies lorem. Proin a lorem nisi. Aenean ultrices elementum risus, non pharetra nulla ornare eu. In fermentum augue et tincidunt molestie. Vivamus vulputate libero fermentum dolor mattis vulputate. Curabitur tempor justo nisl, et egestas velit efficitur sit amet. Curabitur convallis sodales erat, id consequat orci sodales ut. Etiam ornare ut lorem eleifend elementum.
          </p>
        </div>
      </div>
      <div className="relative w-full max-w-md mx-auto">
        <img src="https://via.placeholder.com/400x250" alt="Overlay" className="w-full rounded-lg" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
          <h2 className="text-white text-2xl font-bold text-center">Texto encima de la imagen</h2>
        </div>
      </div>
      <div className="prose max-w-3xl mx-auto">
        <img src="https://via.placeholder.com/200" alt="Ejemplo" className="float-left mr-6 mb-4 w-48 rounded-lg" />
        <p>
          Este es un párrafo largo de ejemplo. Las primeras líneas se alinean al lado de la imagen, ocupando solo el espacio que queda disponible a la derecha de ella. Puedes escribir mucho texto aquí y verás cómo las líneas que “flotan” junto a la imagen se ajustan perfectamente.
        </p>
        <p>
          Una vez que el párrafo sobrepasa la altura de la imagen, el texto siguiente ocupa todo el ancho disponible, justo como querías. Esto permite combinar un bloque de imagen lateral con texto completo debajo sin complicaciones. 
        </p>
      </div>
    </div>
  );
}

