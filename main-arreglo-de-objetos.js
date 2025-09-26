const formCurso = document.getElementById('formulario-curso');
const iCurso = document.getElementById('curso');
const iProfesor = document.getElementById('profesor');
const iPrecio = document.getElementById('precio');
const iCiudad = document.getElementById('ciudad');
const iCupo = document.getElementById('cupo');
const mensaje = document.getElementById('mensajeCurso');
const btnCurso = document.getElementById('borrarCurso');

formCurso.addEventListener('submit',(e)=>{

    e.preventDefault();
    const curso = iCurso.value.trim();
    const profesor = iProfesor.value.trim();
    const precio = iPrecio.value.trim();
    const ciudad = iCiudad.value.trim();
    const cupo = iCupo.value.trim();

    if(iCurso == '' || iProfesor == '' || iPrecio == '' || iCiudad == '' || iCupo == ''){
        
        alert("Ingrese un valor");
        return;
    }

    // ESTAMOS ALIMENTANDO UN OBJETO CON SUS DIFERENTES CLAVES Y VALORES
    const nuevoCurso = {
        nombre:curso,
        profesor:profesor,
        precio:precio,
        ciudad:ciudad,
        cupo:cupo
    }
    // CAPTURAMOS EL ARREGLO EXISTENTE EN LOCALSTORAGE O LO CREAMOS VACIO SI NO EXISTE PREVIAMENTE
    const cursosGuardados = JSON.parse(localStorage.getItem('cursos')) || [];
    // AGREGAMOS AL ARREGLO CURSOS GUARDADOS EL NUEVO CURSO [] EL CURSO {} 
    cursosGuardados.push(nuevoCurso);
    localStorage.setItem('cursos', JSON.stringify(cursosGuardados));
    
    formCurso.reset();
});

document.addEventListener('DOMContentLoaded',()=>{

    const cursoCreado = localStorage.getItem('curso');
    if(cursoCreado){
        const objetoCurso = JSON.parse(cursoCreado) //JSON.parse SE USA EN JAVASCRIPT PARA CONVERITR UNA CADENA DE TEXTO EN FORMATO JSON A UN OBBJETO
        mensaje.innerHTML = 'curso: ' + objetoCurso.nombre + '<br>' + 'profesor: ' + objetoCurso.profesor + '<br>' + 'precio: ' + objetoCurso.precio + '<br>' + 'ciudad: ' + objetoCurso.ciudad  + '<br>' + 'cupo: ' + objetoCurso.cupo;
    }
});

btnCurso.addEventListener('click',()=>{
    localStorage.removeItem('cursos');
    mensaje.innerHTML = ('No hay cursos agregados');
});