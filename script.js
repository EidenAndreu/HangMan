
const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");

let options = {
    spanish: ['Gente' ,'humanidad' ,'humano' ,'persona' ,'gente' ,'hombre' ,'mujer' ,'bebe' , ,'adolescente' ,'adulto','adulta' ,'anciano','anciana' ,'don' ,'caballero' ,'dama' ,'individuo' ,'Cuerpo','humano','y','salud' ,'cuerpo' ,'pierna' ,'pie' ,'talon' ,'espinilla' ,'rodilla' ,'muslo' ,'cabeza' ,'cara' ,'boca' ,'labio' ,'diente' ,'ojo' ,'nariz' ,'barba' ,'bigote' ,'cabello' ,'oreja' ,'cerebro' ,'estomago' ,'brazo' ,'codo' ,'hombro' ,'mano' ,'palma' ,'dedo' ,'trasero','culo','cola','gluteos' ,'abdomen' ,'higado' ,'musculo' ,'cuello' ,'corazon' ,'mente' ,'alma' ,'espiritu' ,'pecho' ,'cintura' ,'cadera' ,'espalda' ,'sangre' ,'carne' ,'piel' ,'hueso' ,'resfriado' ,'gripe' ,'diarrea' ,'salud' ,'enfermedad' ,'Familia','y','otras','relaciones' ,'familia' ,'amigo','amiga' ,'conocido','conocida' ,'colega' ,'pareja' ,'esposo','esposa' ,'matrimonio' ,'amor' ,'padre' ,'madre' ,'hermano','hermana' ,'hijo','hija' ,'abuelo','abuela' ,'bisabuelo','bisabuela' ,'nieto','nieta' ,'bisnieto','bisnieta' ,'primo','prima' ,'tio','tia' ,'sobrino','sobrina' ,'Vida' ,'criatura' ,'especie' ,'ser' ,'vida' ,'nacimiento' ,'reproduccion' ,'muerte' ,'Geografia' ,'naturaleza' ,'campo' ,'bosque' ,'selva','jungla' ,'desierto' ,'costa' ,'playa' ,'rio' ,'laguna','lago' ,'mar','oceano' ,'cerro','monte,' ,'luz' ,'energia' ,'Animales' ,'animal' ,'perro' ,'gato' ,'vaca' ,'cerdo' ,'caballo','yegua' ,'oveja' ,'mono' ,'raton','rata' ,'tigre' ,'conejo' ,'dragon' ,'ciervo' ,'rana' ,'leon' ,'jirafa' ,'elefante' ,'pajaro' ,'gallina' ,'gorrion' ,'cuervo' ,'aguila' ,'halcon' ,'pez' ,'camaron' ,'langosta' ,'sardina' ,'atun' ,'calamar' ,'pulpo' ,'insecto' ,'bicho' ,'mariposa' ,'polilla' ,'saltamontes' ,'mosca' ,'mosquito' ,'cucaracha' ,'caracol' ,'babosa' ,'lombriz' ,'marisco' ,'molusco' ,'lagarto' ,'serpiente' ,'cocodrilo' ,'Plantas','y','alimentos' ,'alimento' ,'comida' ,'bebida' ,'vegetal' ,'planta' ,'pasto','cesped' ,'flor' ,'fruta' ,'semilla' ,'arbol' ,'hoja' ,'raiz' ,'tallo' ,'hongo' ,'ciruela' ,'pino' ,'bambu' ,'nuez' ,'almendra' ,'arroz' ,'avena' ,'cebada' ,'trigo' ,'verdura' ,'patatas','papas' ,'judias','guisantes','porotos' ,'rabano' ,'zanahoria' ,'manzana' ,'naranja' ,'platano' ,'pera' ,'durazno' ,'tomate' ,'sandia' ,'carne' ,'gaseosa' ,'Tiempo' ,'tiempo' ,'calendario' ,'edad' ,'epoca','era' ,'fecha' ,'instante' ,'momento' ,'segundo' ,'minuto' ,'hora' ,'dia' ,'semana' ,'entre','semana' ,'fin','de','semana' ,'mes' ,'decada' ,'siglo' ,'milenio' ,'ayer' ,'hoy' ,'amanecer' ,'mediodia' ,'tarde' ,'anochecer' ,'noche' ,'lunes' ,'martes' ,'miercoles' ,'jueves' ,'viernes' ,'sabado' ,'domingo' ,'Espacio' ,'ambiente' ,'espacio' ,'entorno' ,'area' ,'superficie' ,'volumen' ,'region' ,'zona' ,'lado' ,'mundo' ,'planeta' ,'sol' ,'luna' ,'estrella' ,'galaxia' ,'universo' ,'clima' ,'despejado' ,'nublado' ,'lluvia' ,'nieve' ,'viento' ,'trueno' ,'rayo' ,'tormenta' ,'cielo' ,'este' ,'oeste' ,'sur' ,'norte' ,'derecha' ,'izquierda' ,'diagonal' ,'exterior' ,'interior' ,'Materiales' ,'calor' ,'agua' ,'hielo' ,'vapor' ,'fuego' ,'gas' ,'aire','atmosfera' ,'tierra' ,'piso' ,'suelo' ,'metal','metalico' ,'hierro' ,'oro' ,'plata' ,'plomo' ,'sal' ,'barro','lodo' ,'Medidas' ,'peso' ,'metro' ,'milimetro','centimetro','kilometro' ,'litro' ,'gramo' ,'kilo' ,'cantidad' ,'total' ,'medida' ,'Sociedad' ,'sociedad' ,'comunidad' ,'reunion' ,'encuentro' ,'estructura' ,'administracion' ,'organizacion' ,'asociacion' ,'empresa' ,'equipo' ,'autoridad' ,'cargo' ,'club' ,'comision' ,'congreso' ,'consejo' ,'partido' ,'pais' ,'nacion' ,'gobierno' ,'estado' ,'provincia' ,'departamento' ,'municipio' ,'democracia' ,'dictadura' ,'politica' ,'politico' ,'presidente' ,'ministro' ,'director' ,'parlamentario','congresista','senador','diputado' ,'representante' ,'gobernador','intendente','alcalde' ,'policia' ,'bomberos' ,'capital' ,'ciudad' ,'poblacion' ,'pueblo' ,'villa' ,'obligacion' ,'libertad' ,'derecho' ,'permiso' ,'prohibicion' ,'constitucion' ,'ley' ,'decreto' ,'norma' ,'Economia' ,'economia' ,'consumo' ,'demanda' ,'comercio' ,'mercado' ,'servicio' ,'producto' ,'produccion' ,'transaccion' ,'almacen' ,'hotel' ,'fabrica' ,'cuenta' ,'boleto' ,'entrada' ,'dinero' ,'billete' ,'vuelto','cambio' ,'maquina','expendedora' ,'precio','tarifa' ,'valor' ,'Objetos','hechos','por','el','ser','humano' ,'Hogar' ,'escritorio' ,'silla' ,'mesa' ,'cama' ,'dormitorio' ,'habitacion' ,'cuarto' ,'oficina' ,'panel' ,'puerta' ,'ventana' ,'entrada' ,'hogar' ,'casa' ,'apartamento','departamento' ,'edificio' ,'construccion' ,'elevador','ascensor' ,'escalera' ,'Herramientas' ,'aparato' ,'camara' ,'aguja' ,'clavo' ,'hilo' ,'cuerda','cordel','cordon' ,'bolsillo' ,'bolso' ,'bolsa' ,'paraguas' ,'parasol' ,'pantalla' ,'pomo' ,'llave' ,'trancar' ,'arma' ,'escultura' ,'libro' ,'revista' ,'cuadro' ,'grabado' ,'electricidad' ,'corriente' ,'base' ,'pata' ,'conexion' ,'Ropa' ,'ropa' ,'prenda' ,'manga' ,'solapa','cuello' ,'boton' ,'cremallera','cierre' ,'cinturon' ,'zapato' ,'gafas' ,'pantalon' ,'camisa' ,'camiseta' ,'zapatilla' ,'cordones' ,'abrigo' ,'chaqueta' ,'calcetines' ,'bragas','calzon' ,'calzoncillo' ,'sujetador','sosten' ,'falda' ,'Transportes' ,'transporte','transporte','publico','transporte','privado' ,'transito','trafico' ,'vehiculo' ,'tren','ferrocarril' ,'subterraneo','metro' ,'camino' ,'via' ,'ruta' ,'calle' ,'carretera' ,'autopista' ,'avenida' ,'estacion','parada' ,'avion' ,'aeropuerto' ,'automovil','coche','auto' ,'bus','autobus','omnibus' ,'ambulancia' ,'Lenguaje' ,'numero' ,'alfabeto' ,'simbolo' ,'punto' ,'coma' ,'raiz','origen','fuente' ,'papel' ,'carta' ,'comunicacion' ,'expresion' ,'voz' ,'texto' ,'periodismo' ,'periodico','diario' ,'diccionario' ,'documento' ,'informe' ,'noticia' ,'computadora','ordenador' ,'idioma','extranjero' ,'japones' ,'ingles' ,'chino' ,'aleman' ,'frances' ,'Colores' ,'color' ,'blanco' ,'negro' ,'gris' ,'rojo' ,'naranja','anaranjado' ,'amarillo' ,'verde' ,'celeste' ,'azul' ,'violeta' ,'rosa','rosado' ,'marron','cafe' ,'Actividades' ,'cultura' ,'autor' ,'actuacion' ,'espectador' ,'espectaculo' ,'entretenimiento' ,'arte' ,'cine' ,'dibujo' ,'pintura' ,'musica' ,'religion' ,'dios' ,'articulo' ,'educacion' ,'escuela' ,'instituto' ,'colegio' ,'universidad' ,'clase' ,'curso' ,'estudio' ,'formacion' ,'analisis' ,'investigacion' ,'conocimiento' ,'idea' ,'informacion' ,'dato' ,'forma' ,'manera' ,'modo' ,'estilo' ,'figura' ,'elemento' ,'uso','utilizacion' ,'ciencia' ,'aritmetica' ,'historia' ,'geografia' ,'educacion','fisica' ,'deporte' ,'carrera' ,'competicion','competencia' ,'ayuda' ,'favor' ,'apoyo' ,'busqueda' ,'duda' ,'pregunta' ,'respuesta' ,'cuestion' ,'solicitud' ,'decision' ,'eleccion' ,'consejo' ,'sugerencia' ,'orden' ,'control' ,'sistema' ,'trabajo' ,'empleo' ,'profesion' ,'esfuerzo' ,'Numeros' ,'cero' ,'uno' ,'dos' ,'tres' ,'cuatro' ,'cinco' ,'seis' ,'siete' ,'ocho' ,'nueve' ,'diez' ,'cien','ciento' ,'mil' ,'millon' ,'Espacio','y','cantidad' ,'lugar' ,'posicion' ,'movimiento' ,'velocidad' ,'aceleracion' ,'direccion' ,'largo','longitud' ,'alto','altura' ,'ancho' ,'mayoria' ,'minoria' ,'aumento' ,'reduccion' ,'crecimiento' ,'fondo' ,'frente' ,'Sustantivos','abstractos' ,'cosa' ,'aspecto' ,'contenido' ,'objeto' ,'parte' ,'sector' ,'palabra' ,'nombre' ,'codigo' ,'secreto' ,'formalidad' ,'presente' ,'pasado' ,'futuro' ,'ocasion' ,'vez' ,'accion' ,'actividad' ,'acto' ,'programa' ,'proyecto' ,'obra' ,'acuerdo' ,'actitud' ,'atencion' ,'capacidad' ,'concepto' ,'tema' ,'condicion' ,'caso' ,'conjunto' ,'grupo' ,'creacion' ,'destruccion' ,'origen' ,'destino' ,'objetivo','meta' ,'funcion' ,'relacion' ,'realidad' ,'situacion' ,'problema' ,'intento' ,'solucion' ,'efecto' ,'resultado' ,'logro' ,'exito' ,'fracaso' ,'causa' ,'consecuencia' ,'beneficio' ,'perjuicio' ,'calidad' ,'tipo' ,'ataque' ,'defensa' ,'paz' ,'conflicto' ,'guerra' ,'caracter' ,'caracteristica' ,'crisis' ,'cambio' ,'desarrollo' ,'progreso' ,'avance' ,'retroceso' ,'mejora' ,'deterioro' ,'comienzo','inicio','principio' ,'transcurso' ,'fin','final','cabo' ,'etapa' ,'fase' ,'paso' ,'serie' ,'secuencia' ,'grado' ,'nivel' ,'proceso' ,'corte' ,'interrupcion' ,'espera' ,'diferencia' ,'similitud' ,'sentido' ,'sensacion' ,'vista' ,'oido' ,'tacto' ,'olfato' ,'dolor' ,'conciencia' ,'percepcion' ,'imagen' ,'fuerza' ,'potencia' ,'presencia' ,'existencia' ,'experiencia' ,'posibilidad' ,'probabilidad' ,'verdad' ,'mentira' ,'razon' ,'acierto' ,'equivocacion' ,'necesidad' ,'falta' ,'significado' ,'caracter' ,'personalidad' ,'pensamiento' ,'memoria' ,'recuerdo' ,'deseo' ,'alegria' ,'tristeza' ,'enojo','enfado' ,'placer','extasis' ,'empatia' ,'interes' ,'aburrimiento' ,'cansancio' ,'sorpresa' ,'susto' ,'seguridad' ,'confianza' ,'miedo','temor' ,'ejemplo' ,'Adjetivos' ,'Adjetivos','de','calidad' ,'bueno','buen' ,'malo' ,'superior' ,'inferior' ,'central' ,'lateral' ,'frontal' ,'trasero','posterior' ,'cierto' ,'real' ,'falso' ,'mayor' ,'menor' ,'importante' ,'necesario' ,'absoluto' ,'relativo' ,'caro' ,'barato' ,'viejo' ,'joven' ,'nuevo' ,'cada' ,'cualquier' ,'dado' ,'actual' ,'reciente' ,'capaz' ,'facil','simple','sencillo' ,'dificil','complicado' ,'posible' ,'imposible' ,'probable' ,'improbable' ,'estricto' ,'serio' ,'general' ,'particular' ,'comun' ,'especial' ,'usual' ,'unico' ,'raro','fuerte' ,'debil' ,'correcto','acertado' ,'incorrecto','desacertado' ,'contrario','opuesto','inverso' ,'igual' ,'diferente','distinto' ,'parecido','similar' ,'otro' ,'diverso' ,'manual' ,'automatico' ,'universal' ,'mundial' ,'continental' ,'internacional' ,'nacional' ,'regional' ,'local' ,'urbano' ,'rural' ,'social' ,'politico' ,'cultural' ,'artistico' ,'propio' ,'ajeno' ,'publico' ,'privado' ,'Adjetivos','de','forma' ,'alto' ,'bajo' ,'gran' ,'grande' ,'amplio' ,'angosto' ,'compacto' ,'delgado' ,'grueso' ,'Adjetivos','sensoriales' ,'caliente' ,'frio' ,'ligero' ,'pesado' ,'suave' ,'firme' ,'flexible' ,'duro' ,'blando' ,'caluroso' ,'frio' ,'fresco' ,'delicioso','apetitoso' ,'horrible' ,'dulce' ,'picante' ,'salado' ,'amargo' ,'anterior' ,'posterior' ,'siguiente' ,'cercano' ,'lejano' ,'junto' ,'unido' ,'separado' ,'alejado' ,'Adjetivos','de','sentimientos','y','sensaciones' ,'feliz' ,'triste' ,'solo' ,'solitario' ,'contento' ,'tranquilo' ,'enojado','enfadado' ,'calmo' ,'agitado' ,'ansioso' ,'interesado' ,'aburrido' ,'encantado' ,'cansado' ,'sorprendido' ,'asustado','atemorizado' ,'doloroso' ,'picante','ardiente' ,'apestoso','maloliente' ,'Primer' ,'Primero' ,'primera' ,'segundo' ,'tercero' ,'cuarto' ,'quinto' ,'decimo' ,'centesimo' ,'millonesimo' ,'penultimo' ,'ultimo' ,'mi' ,'tu' ,'su' ,'nuestro' ,'nuestra' ,'vuestro' ,'vuestra' ,'Verbos' ,'Auxiliares' ,'ser' ,'estar' ,'haber' ,'Existencia' ,'aparecer' ,'desaparecer' ,'existir' ,'cambiar' ,'crecer' ,'vivir' ,'nacer' ,'morir' ,'Movimiento' ,'ir' ,'venir' ,'volver' ,'partir' ,'llegar' ,'llevar' ,'traer' ,'mover' ,'arrojar' ,'lanzar' ,'coger' ,'agarrar' ,'poner' ,'quitar' ,'sacar' ,'alcanzar' ,'acercar' ,'alejar' ,'lanzar' ,'arrojar' ,'lanzar' ,'coger' ,'agarrar' ,'sujetar' ,'golpear' ,'patear' ,'poner' ,'quitar' ,'sacar' ,'alcanzar' ,'acercar' ,'alejar' ,'recoger' ,'levantar' ,'tomar' ,'pegar' ,'Sensaciones' ,'sentir' ,'ver' ,'oir' ,'escuchar' ,'tocar' ,'oler' ,'percibir' ,'Emociones' ,'amar' ,'querer' ,'desear' ,'odiar' ,'detestar' ,'entristecerse' ,'llorar' ,'reir' ,'enojarse' ,'enfadarse' ,'admirar' ,'alabar' ,'elogiar' ,'alegrarse' ,'encantarse' ,'consolar' ,'interesarse' ,'aburrirse' ,'cansarse' ,'sorprenderse' ,'asustarse' ,'atemorizarse' ,'Actividades' ,'comunicarse' ,'afirmar' ,'negar' ,'decir' ,'hablar' ,'callar' ,'escribir' ,'leer' ,'analizar' ,'pensar' ,'cantar' ,'morder' ,'clavar' ,'comer' ,'beber' ,'acordar' ,'afectar' ,'generar' ,'agregar' ,'mejorar' ,'empeorar' ,'seguir' ,'avanzar' ,'retroceder' ,'ayudar' ,'complicar' ,'reunirse' ,'entrevistar' ,'abrir' ,'desenvolver' ,'jugar' ,'tener' ,'faltar' ,'dar' ,'recibir' ,'romper' ,'doblar' ,'cortar' ,'comprar' ,'vender' ,'llevar','puesto' ,'cambiar' ,'intercambiar' ,'sustituir' ,'reemplazar' ,'cerrar' ,'buscar' ,'encontrar' ,'obtener' ,'conseguir' ,'crear' ,'creer' ,'comenzar' ,'iniciar' ,'empezar' ,'terminar','acabar' ,'abandonar' ,'dejar' ,'entrar' ,'quedarse' ,'salir' ,'atender' ,'medir' ,'pesar' ,'considerar' ,'comparar' ,'evaluar' ,'decidir' ,'construir' ,'destruir' ,'deber' ,'poder' ,'conocer' ,'entender' ,'comprender' ,'atar' ,'saber' ,'trabajar' ,'separar' ,'dividir' ,'partir' ,'descansar' ,'dormir' ,'despertar' ,'aceptar' ,'rechazar' ,'descartar' ,'pedir' ,'solicitar' ,'pretender' ,'proponer' ,'sugerir' ,'usar' ,'utilizar' ,'hacer' ,'fabricar' ,'arreglar' ,'reparar' ,'explicar' ,'mostrar' ,'tratar' ,'evitar' ,'probar' ,'','intentar' ,'comprobar' ,'','verificar' ,'variar' ,'esperar' ,'necesitar' ,'','precisar' ,'significar' ,'parecer' ,'distinguir' ,'Adverbios' ,'mas' ,'menos' ,'muy' ,'mucho' ,'poco' ,'apenas' ,'algo' ,'casi' ,'aproximadamente' ,'exactamente' ,'bastante' ,'justo' ,'demasiado' ,'etcetera' ,'solo','solamente' ,'tan' ,'tanto' ,'todo' ,'nada' ,'como' ,'cuando' ,'cuanto' ,'cual','cuales' ,'donde' ,'bien' ,'mal' ,'mejor' ,'peor' ,'regular' ,'despacio' ,'deprisa' ,'tal' ,'como' ,'adrede' ,'claro' ,'exacto' ,'obvio' ,'inclusive' ,'ademas' ,'asimismo' ,'unicamente' ,'especialmente' ,'incluso' ,'viceversa' ,'siquiera' ,'inicialmente' ,'finalmente' ,'siempre' ,'nunca' ,'jamas' ,'tambien' ,'tampoco' ,'quiza','quizas' ,'acaso' ,'facilmente' ,'dificilmente' ,'probablemente' ,'posiblemente' ,'seguramente' ,'Adverbios','temporales' ,'antes' ,'anteriormente' ,'actualmente' ,'ahora' ,'enseguida' ,'inmediatamente' ,'ya' ,'todavia' ,'aun' ,'recien' ,'mientras' ,'despues' ,'luego' ,'pronto' ,'tarde' ,'temprano' ,'ayer' ,'anoche' ,'hoy' ,'de','nuevo' ,'proximamente'],
    english: ['people' ,'history' ,'way' ,'art' ,'world' ,'information' ,'map' ,'two' ,'family' ,'government' ,'health' ,'system' ,'computer' ,'meat' ,'year' ,'thanks' ,'music' ,'person' ,'reading' ,'method' ,'data' ,'food' ,'understanding' ,'theory' ,'law' ,'bird' ,'literature' ,'problem' ,'software' ,'control' ,'knowledge' ,'power' ,'ability' ,'economics' ,'love' ,'internet' ,'television' ,'science' ,'library' ,'nature' ,'fact' ,'product' ,'idea' ,'temperature' ,'investment' ,'area' ,'society' ,'activity' ,'story' ,'industry' ,'media' ,'thing' ,'oven' ,'community' ,'definition' ,'safety' ,'quality' ,'development' ,'language' ,'management' ,'player' ,'variety' ,'video' ,'week' ,'security' ,'country' ,'exam' ,'movie' ,'organization' ,'equipment' ,'physics' ,'analysis' ,'policy' ,'series' ,'thought' ,'basis' ,'boyfriend' ,'direction' ,'strategy' ,'technology' ,'army' ,'camera' ,'freedom' ,'paper' ,'environment' ,'child' ,'instance' ,'month' ,'truth' ,'marketing' ,'university' ,'writing' ,'article' ,'department' ,'difference' ,'goal' ,'news' ,'audience' ,'fishing' ,'growth' ,'income' ,'marriage' ,'user' ,'combination' ,'failure' ,'meaning' ,'medicine' ,'philosophy' ,'teacher' ,'communication' ,'night' ,'chemistry' ,'disease' ,'disk' ,'energy' ,'nation' ,'road' ,'role' ,'soup' ,'advertising' ,'location' ,'success' ,'addition' ,'apartment' ,'education' ,'math' ,'moment' ,'painting' ,'politics' ,'attention' ,'decision' ,'event' ,'property' ,'shopping' ,'student' ,'wood' ,'competition' ,'distribution' ,'entertainment' ,'office' ,'population' ,'president' ,'unit' ,'category' ,'cigarette' ,'context' ,'introduction' ,'opportunity' ,'performance' ,'driver' ,'flight' ,'length' ,'magazine' ,'newspaper' ,'relationship' ,'teaching' ,'cell' ,'dealer' ,'finding' ,'lake' ,'member' ,'message' ,'phone' ,'scene' ,'appearance' ,'association' ,'concept' ,'customer' ,'death' ,'discussion' ,'housing' ,'inflation' ,'insurance' ,'mood' ,'woman' ,'advice' ,'blood' ,'effort' ,'expression' ,'importance' ,'opinion' ,'payment' ,'reality' ,'responsibility' ,'situation' ,'skill' ,'statement' ,'wealth' ,'application' ,'city' ,'county' ,'depth' ,'estate' ,'foundation' ,'grandmother' ,'heart' ,'perspective' ,'photo' ,'recipe' ,'studio' ,'topic' ,'collection' ,'depression' ,'imagination' ,'passion' ,'percentage' ,'resource' ,'setting' ,'ad' ,'agency' ,'college' ,'connection' ,'criticism' ,'debt' ,'description' ,'memory' ,'patience' ,'secretary' ,'solution' ,'administration' ,'aspect' ,'attitude' ,'director' ,'personality' ,'psychology' ,'recommendation' ,'response' ,'selection' ,'storage' ,'version' ,'alcohol' ,'argument' ,'complaint' ,'contract' ,'emphasis' ,'highway' ,'loss' ,'membership' ,'possession' ,'preparation' ,'steak' ,'union' ,'agreement' ,'cancer' ,'currency' ,'employment' ,'engineering' ,'entry' ,'interaction' ,'mixture' ,'preference' ,'region' ,'republic' ,'tradition' ,'virus' ,'actor' ,'classroom' ,'delivery' ,'device' ,'difficulty' ,'drama' ,'election' ,'engine' ,'football' ,'guidance' ,'hotel' ,'owner' ,'priority' ,'protection' ,'suggestion' ,'tension' ,'variation' ,'anxiety' ,'atmosphere' ,'awareness' ,'bath' ,'bread' ,'candidate' ,'climate' ,'comparison' ,'confusion' ,'construction' ,'elevator' ,'emotion' ,'employee' ,'employer' ,'guest' ,'height' ,'leadership' ,'mall' ,'manager' ,'operation' ,'recording' ,'sample' ,'transportation' ,'charity' ,'cousin' ,'disaster' ,'editor' ,'efficiency' ,'excitement' ,'extent' ,'feedback' ,'guitar' ,'homework' ,'leader' ,'mom' ,'outcome' ,'permission' ,'presentation' ,'promotion' ,'reflection' ,'refrigerator' ,'resolution' ,'revenue' ,'session' ,'singer' ,'tennis' ,'basket' ,'bonus' ,'cabinet' ,'childhood' ,'church' ,'clothes' ,'coffee' ,'dinner' ,'drawing' ,'hair' ,'hearing' ,'initiative' ,'judgment' ,'lab' ,'measurement' ,'mode' ,'mud' ,'orange' ,'poetry' ,'police' ,'possibility' ,'procedure' ,'queen' ,'ratio' ,'relation' ,'restaurant' ,'satisfaction' ,'sector' ,'signature' ,'significance' ,'song' ,'tooth' ,'town' ,'vehicle' ,'volume' ,'wife' ,'accident' ,'airport' ,'appointment' ,'arrival' ,'assumption' ,'baseball' ,'chapter' ,'committee' ,'conversation' ,'database' ,'enthusiasm' ,'error' ,'explanation' ,'farmer' ,'gate' ,'girl' ,'hall' ,'historian' ,'hospital' ,'injury' ,'instruction' ,'maintenance' ,'manufacturer' ,'meal' ,'perception' ,'pie' ,'poem' ,'presence' ,'proposal' ,'reception' ,'replacement' ,'revolution' ,'river' ,'son' ,'speech' ,'tea' ,'village' ,'warning' ,'winner' ,'worker' ,'writer' ,'assistance' ,'breath' ,'buyer' ,'chest' ,'chocolate' ,'conclusion' ,'contribution' ,'cookie' ,'courage' ,'dad' ,'desk' ,'drawer' ,'establishment' ,'examination' ,'garbage' ,'grocery' ,'honey' ,'impression' ,'improvement' ,'independence' ,'insect' ,'inspection' ,'inspector' ,'king' ,'ladder' ,'menu' ,'penalty' ,'piano' ,'potato' ,'profession' ,'professor' ,'quantity' ,'reaction' ,'requirement' ,'salad' ,'sister' ,'supermarket' ,'tongue' ,'weakness' ,'wedding' ,'affair' ,'ambition' ,'analyst' ,'apple' ,'assignment' ,'assistant' ,'bathroom' ,'bedroom' ,'beer' ,'birthday' ,'celebration' ,'championship' ,'cheek' ,'client' ,'consequence' ,'departure' ,'diamond' ,'dirt' ,'ear' ,'fortune' ,'friendship' ,'funeral' ,'gene' ,'girlfriend' ,'hat' ,'indication' ,'intention' ,'lady' ,'midnight' ,'negotiation' ,'obligation' ,'passenger' ,'pizza' ,'platform' ,'poet' ,'pollution' ,'recognition' ,'reputation' ,'shirt' ,'sir' ,'speaker' ,'stranger' ,'surgery' ,'sympathy' ,'tale' ,'throat' ,'trainer' ,'uncle' ,'youth' ,'time' ,'work' ,'film' ,'water' ,'money' ,'example' ,'while' ,'business' ,'study' ,'game' ,'life' ,'form' ,'air' ,'day' ,'place' ,'number' ,'part' ,'field' ,'fish' ,'back' ,'process' ,'heat' ,'hand' ,'experience' ,'job' ,'book' ,'end' ,'point' ,'type' ,'home' ,'economy' ,'value' ,'body' ,'market' ,'guide' ,'interest' ,'state' ,'radio' ,'course' ,'company' ,'price' ,'size' ,'card' ,'list' ,'mind' ,'trade' ,'line' ,'care' ,'group' ,'risk' ,'word' ,'fat' ,'force' ,'key' ,'light' ,'training' ,'name' ,'school' ,'top' ,'amount' ,'level' ,'order' ,'practice' ,'research' ,'sense' ,'service' ,'piece' ,'web' ,'boss' ,'sport' ,'fun' ,'house' ,'page' ,'term' ,'test' ,'answer' ,'sound' ,'focus' ,'matter' ,'kind' ,'soil' ,'board' ,'oil' ,'picture' ,'access' ,'garden' ,'range' ,'rate' ,'reason' ,'future' ,'site' ,'demand' ,'exercise' ,'image' ,'case' ,'cause' ,'coast' ,'action' ,'age' ,'bad' ,'boat' ,'record' ,'result' ,'section' ,'building' ,'mouse' ,'cash' ,'class' ,'nothing' ,'period' ,'plan' ,'store' ,'tax' ,'side' ,'subject' ,'space' ,'rule' ,'stock' ,'weather' ,'chance' ,'figure' ,'man' ,'model' ,'source' ,'beginning' ,'earth' ,'program' ,'chicken' ,'design' ,'feature' ,'head' ,'material' ,'purpose' ,'question' ,'rock' ,'salt' ,'act' ,'birth' ,'car' ,'dog' ,'object' ,'scale' ,'sun' ,'note' ,'profit' ,'rent' ,'speed' ,'style' ,'war' ,'bank' ,'craft' ,'half' ,'inside' ,'outside' ,'standard' ,'bus' ,'exchange' ,'eye' ,'fire' ,'position' ,'pressure' ,'stress' ,'advantage' ,'benefit' ,'box' ,'frame' ,'issue' ,'step' ,'cycle' ,'face' ,'item' ,'metal' ,'paint' ,'review' ,'room' ,'screen' ,'structure' ,'view' ,'account' ,'ball' ,'discipline' ,'medium' ,'share' ,'balance' ,'bit' ,'black' ,'bottom' ,'choice' ,'gift' ,'impact' ,'machine' ,'shape' ,'tool' ,'wind' ,'address' ,'average' ,'career' ,'culture' ,'morning' ,'pot' ,'sign' ,'table' ,'task' ,'condition' ,'contact' ,'credit' ,'egg' ,'hope' ,'ice' ,'network' ,'north' ,'square' ,'attempt' ,'date' ,'effect' ,'link' ,'post' ,'star' ,'voice' ,'capital' ,'challenge' ,'friend' ,'self' ,'shot' ,'brush' ,'couple' ,'debate' ,'exit' ,'front' ,'function' ,'lack' ,'living' ,'plant' ,'plastic' ,'spot' ,'summer' ,'taste' ,'theme' ,'track' ,'wing' ,'brain' ,'button' ,'click' ,'desire' ,'foot' ,'gas' ,'influence' ,'notice' ,'rain' ,'wall' ,'base' ,'damage' ,'distance' ,'feeling' ,'pair' ,'savings' ,'staff' ,'sugar' ,'target' ,'text' ,'animal' ,'author' ,'budget' ,'discount' ,'file' ,'ground' ,'lesson' ,'minute' ,'officer' ,'phase' ,'reference' ,'register' ,'sky' ,'stage' ,'stick' ,'title' ,'trouble' ,'bowl' ,'bridge' ,'campaign' ,'character' ,'club' ,'edge' ,'evidence' ,'fan' ,'letter' ,'lock' ,'maximum' ,'novel' ,'option' ,'pack' ,'park' ,'plenty' ,'quarter' ,'skin' ,'sort' ,'weight' ,'baby' ,'background' ,'carry' ,'dish' ,'factor' ,'fruit' ,'glass' ,'joint' ,'master' ,'muscle' ,'red' ,'strength' ,'traffic' ,'trip' ,'vegetable' ,'appeal' ,'chart' ,'gear' ,'ideal' ,'kitchen' ,'land' ,'log' ,'mother' ,'net' ,'party' ,'principle' ,'relative' ,'sale' ,'season' ,'signal' ,'spirit' ,'street' ,'tree' ,'wave' ,'belt' ,'bench' ,'commission' ,'copy' ,'drop' ,'minimum' ,'path' ,'progress' ,'project' ,'sea' ,'south' ,'status' ,'stuff' ,'ticket' ,'tour' ,'angle' ,'blue' ,'breakfast' ,'confidence' ,'daughter' ,'degree' ,'doctor' ,'dot' ,'dream' ,'duty' ,'essay' ,'father' ,'fee' ,'finance' ,'hour' ,'juice' ,'limit' ,'luck' ,'milk' ,'mouth' ,'peace' ,'pipe' ,'seat' ,'stable' ,'storm' ,'substance' ,'team' ,'trick' ,'afternoon' ,'bat' ,'beach' ,'blank' ,'catch' ,'chain' ,'consideration' ,'cream' ,'crew' ,'detail' ,'gold' ,'interview' ,'kid' ,'mark' ,'match' ,'mission' ,'pain' ,'pleasure' ,'score' ,'screw' ,'sex' ,'shop' ,'shower' ,'suit' ,'tone' ,'window' ,'agent' ,'band' ,'block' ,'bone' ,'calendar' ,'cap' ,'coat' ,'contest' ,'corner' ,'court' ,'cup' ,'district' ,'door' ,'east' ,'finger' ,'garage' ,'guarantee' ,'hole' ,'hook' ,'implement' ,'layer' ,'lecture' ,'lie' ,'manner' ,'meeting' ,'nose' ,'parking' ,'partner' ,'profile' ,'respect' ,'rice' ,'routine' ,'schedule' ,'swimming' ,'telephone' ,'tip' ,'winter' ,'airline' ,'bag' ,'battle' ,'bed' ,'bill' ,'bother' ,'cake' ,'code' ,'curve' ,'designer' ,'dimension' ,'dress' ,'ease' ,'emergency' ,'evening' ,'extension' ,'farm' ,'fight' ,'gap' ,'grade' ,'holiday' ,'horror' ,'horse' ,'host' ,'husband' ,'loan' ,'mistake' ,'mountain' ,'nail' ,'noise' ,'occasion' ,'package' ,'patient' ,'pause' ,'phrase' ,'proof' ,'race' ,'relief' ,'sand' ,'sentence' ,'shoulder' ,'smoke' ,'stomach' ,'string' ,'tourist' ,'towel' ,'vacation' ,'west' ,'wheel' ,'wine' ,'arm' ,'aside' ,'associate' ,'bet' ,'blow' ,'border' ,'branch' ,'breast' ,'brother' ,'buddy' ,'bunch' ,'chip' ,'coach' ,'cross' ,'document' ,'draft' ,'dust' ,'expert' ,'floor' ,'god' ,'golf' ,'habit' ,'iron' ,'judge' ,'knife' ,'landscape' ,'league' ,'mail' ,'mess' ,'native' ,'opening' ,'parent' ,'pattern' ,'pin' ,'pool' ,'pound' ,'request' ,'salary' ,'shame' ,'shelter' ,'shoe' ,'silver' ,'tackle' ,'tank' ,'trust' ,'assist' ,'bake' ,'bar' ,'bell' ,'bike' ,'blame' ,'boy' ,'brick' ,'chair' ,'closet' ,'clue' ,'collar' ,'comment' ,'conference' ,'devil' ,'diet' ,'fear' ,'fuel' ,'glove' ,'jacket' ,'lunch' ,'monitor' ,'mortgage' ,'nurse' ,'pace' ,'panic' ,'peak' ,'plane' ,'reward' ,'row' ,'sandwich' ,'shock' ,'spite' ,'spray' ,'surprise' ,'till' ,'transition' ,'weekend' ,'welcome' ,'yard' ,'alarm' ,'bend' ,'bicycle' ,'bite' ,'blind' ,'bottle' ,'cable' ,'candle' ,'clerk' ,'cloud' ,'concert' ,'counter' ,'flower' ,'grandfather' ,'harm' ,'knee' ,'lawyer' ,'leather' ,'load' ,'mirror' ,'neck' ,'pension' ,'plate' ,'purple' ,'ruin' ,'ship' ,'skirt' ,'slice' ,'snow' ,'specialist' ,'stroke' ,'switch' ,'trash' ,'tune' ,'zone' ,'anger' ,'award' ,'bid' ,'bitter' ,'boot' ,'bug' ,'camp' ,'candy' ,'carpet' ,'cat' ,'champion' ,'channel' ,'clock' ,'comfort' ,'cow' ,'crack' ,'engineer' ,'entrance' ,'fault' ,'grass' ,'guy' ,'hell' ,'highlight' ,'incident' ,'island' ,'joke' ,'jury' ,'leg' ,'lip' ,'mate' ,'motor' ,'nerve' ,'passage' ,'pen' ,'pride' ,'priest' ,'prize' ,'promise' ,'resident' ,'resort' ,'ring' ,'roof' ,'rope' ,'sail' ,'scheme' ,'script' ,'sock' ,'station' ,'toe' ,'tower' ,'truck' ,'witness' ,'a' ,'you' ,'it' ,'can' ,'will' ,'if' ,'one' ,'many' ,'most' ,'other' ,'use' ,'make' ,'good' ,'look' ,'help' ,'go' ,'great' ,'being' ,'few' ,'might' ,'still' ,'public' ,'read' ,'keep' ,'start' ,'give' ,'human' ,'local' ,'general' ,'she' ,'specific' ,'long' ,'play' ,'feel' ,'high' ,'tonight' ,'put' ,'common' ,'set' ,'change' ,'simple' ,'past' ,'big' ,'possible' ,'particular' ,'today' ,'major' ,'personal' ,'current' ,'national' ,'cut' ,'natural' ,'physical' ,'show' ,'try' ,'check' ,'second' ,'call' ,'move' ,'pay' ,'let' ,'increase' ,'single' ,'individual' ,'turn' ,'ask' ,'buy' ,'guard' ,'hold' ,'main' ,'offer' ,'potential' ,'professional' ,'international' ,'travel' ,'cook' ,'alternative' ,'following' ,'special' ,'working' ,'whole' ,'dance' ,'excuse' ,'cold' ,'commercial' ,'low' ,'purchase' ,'deal' ,'primary' ,'worth' ,'fall' ,'necessary' ,'positive' ,'produce' ,'search' ,'present' ,'spend' ,'talk' ,'creative' ,'tell' ,'cost' ,'drive' ,'green' ,'support' ,'glad' ,'remove' ,'return' ,'run' ,'complex' ,'due' ,'effective' ,'middle' ,'regular' ,'reserve' ,'independent' ,'leave' ,'original' ,'reach' ,'rest' ,'serve' ,'watch' ,'beautiful' ,'charge' ,'active' ,'break' ,'negative' ,'safe' ,'stay' ,'visit' ,'visual' ,'affect' ,'cover' ,'report' ,'rise' ,'walk' ,'white' ,'beyond' ,'junior' ,'pick' ,'unique' ,'anything' ,'classic' ,'final' ,'lift' ,'mix' ,'private' ,'stop' ,'teach' ,'western' ,'concern' ,'familiar' ,'fly' ,'official' ,'broad' ,'comfortable' ,'gain' ,'maybe' ,'rich' ,'save' ,'stand' ,'young' ,'fail' ,'heavy' ,'hello' ,'lead' ,'listen' ,'valuable' ,'worry' ,'handle' ,'leading' ,'meet' ,'release' ,'sell' ,'finish' ,'normal' ,'press' ,'ride' ,'secret' ,'spread' ,'spring' ,'tough' ,'wait' ,'brown' ,'deep' ,'display' ,'flow' ,'hit' ,'objective' ,'shoot' ,'touch' ,'cancel' ,'chemical' ,'cry' ,'dump' ,'extreme' ,'push' ,'conflict' ,'eat' ,'fill' ,'formal' ,'jump' ,'kick' ,'opposite' ,'pass' ,'pitch' ,'remote' ,'total' ,'treat' ,'vast' ,'abuse' ,'beat' ,'burn' ,'deposit' ,'print' ,'raise' ,'sleep' ,'somewhere' ,'advance' ,'anywhere' ,'consist' ,'dark' ,'double' ,'draw' ,'equal' ,'fix' ,'hire' ,'internal' ,'join' ,'kill' ,'sensitive' ,'tap' ,'win' ,'attack' ,'claim' ,'constant' ,'drag' ,'drink' ,'guess' ,'minor' ,'pull' ,'raw' ,'soft' ,'solid' ,'wear' ,'weird' ,'wonder' ,'annual' ,'count' ,'dead' ,'doubt' ,'feed' ,'forever' ,'impress' ,'nobody' ,'repeat' ,'round' ,'sing' ,'slide' ,'strip' ,'whereas' ,'wish' ,'combine' ,'command' ,'dig' ,'divide' ,'equivalent' ,'hang' ,'hunt' ,'initial' ,'march' ,'mention' ,'smell' ,'spiritual' ,'survey' ,'tie' ,'adult' ,'brief' ,'crazy' ,'escape' ,'gather' ,'hate' ,'prior' ,'repair' ,'rough' ,'sad' ,'scratch' ,'sick' ,'strike' ,'employ' ,'external' ,'hurt' ,'illegal' ,'laugh' ,'lay' ,'mobile' ,'nasty' ,'ordinary' ,'respond' ,'royal' ,'senior' ,'split' ,'strain' ,'struggle' ,'swim' ,'train' ,'upper' ,'wash' ,'yellow' ,'convert' ,'crash' ,'dependent' ,'fold' ,'funny' ,'grab' ,'hide' ,'miss' ,'permit' ,'quote' ,'recover' ,'resolve' ,'roll' ,'sink' ,'slip' ,'spare' ,'suspect' ,'sweet' ,'swing' ,'twist' ,'upstairs' ,'usual' ,'abroad' ,'brave' ,'calm' ,'concentrate' ,'estimate' ,'grand' ,'male' ,'mine' ,'prompt' ,'quiet' ,'refuse' ,'regret' ,'reveal' ,'rush' ,'shake' ,'shift' ,'shine' ,'steal' ,'suck' ,'surround' ,'anybody' ,'bear' ,'brilliant' ,'dare' ,'dear' ,'delay' ,'drunk' ,'female' ,'hurry' ,'inevitable' ,'invite' ,'kiss' ,'neat' ,'pop' ,'punch' ,'quit' ,'reply' ,'representative' ,'resist' ,'rip' ,'rub' ,'silly' ,'smile' ,'spell' ,'stretch' ,'stupid' ,'tear' ,'temporary' ,'tomorrow' ,'wake' ,'wrap' ,'yesterday']
};

let winCount = 0;
let count = 0;
let chosenWord = "";
 
const displayOptions = () => {
    optionsContainer.innerHTML+=`<h3>Please select an option</h3>`;
    let buttonCon = document.createElement("div");
    for(let value in options){
        buttonCon.innerHTML+=`<button class = "options" onclick="generatedWord('${value}')"> ${value} </button>` ;
        }
        optionsContainer.appendChild(buttonCon);
};

const blocker = () => {
    let optionsButtons=document.querySelectorAll(".options");
    let letterButtons=document.querySelectorAll(".letters");

    optionsButtons.forEach(button=>{
        button.disabled = true;
    });

    letterButtons.forEach(button=>{
        button.disabled.true;
    });

    newGameContainer.classList.remove("hide");
};

const generatedWord = (optionValue) => {
    let optionsButtons = document.querySelectorAll(".options");
    optionsButtons.forEach((button) => {
        if(button.innerText.toLowerCase() === optionValue){
            button.classList.add("active");
        }
        button.disabled = true;
    });


    letterContainer.classList.remove("hide");
    userInputSection.innerText ="";

    let optionArray = options[optionValue];

    chosenWord = optionArray[Math.floor(Math.random()*optionArray.length)];
    chosenWord=chosenWord.toUpperCase();
    console.log(chosenWord);

    let displayItem = chosenWord.replace(/./g,'<span class = "dashes">_</span>');

    userInputSection.innerHTML = displayItem;
};


const initializer = () => {
    winCount=0;
    count=0;

    userInputSection.innerHTML ="";
    optionsContainer.innerHTML="";
    letterContainer.classList.add("hide");
    newGameContainer.classList.add("hide");
    letterContainer.innerHTML = "";

    for(let i=65;i<91;i++){
        let button = document.createElement("button");
        button.classList.add("letters");
        
        button.innerText = String.fromCharCode(i);

        button.addEventListener("click", () =>{
            let charArray = chosenWord.split("");
            let dashes = document.getElementsByClassName("dashes");

            if(charArray.includes(button.innerText)){
                charArray.forEach((char, index) => {
                    if(char === button.innerText){
                        dashes[index].innerText = char;
                        winCount+= 1;
                        if(winCount === charArray.length){
                            resultText.innerHTML = `<h2 class ='win-msg'>You win!</h2>
                            <p>The word was <span>${chosenWord}</span></p>`;
                            blocker();
                        }
                    }

                });
            }
            else{
                count+=1;

                drawMan(count);

                
                if(count == 6){
                    resultText.innerHTML =  `<h2 class ='lose-msg'>You lose!</h2>
                    <p>The word was <span>${chosenWord}</span></p>`;
                    blocker();
                }

            }
            button.disabled = true;

        });
        letterContainer.append(button);
    }

    displayOptions();

    let{initialDrawing} = canvasCreator();

    initialDrawing();
};

const canvasCreator = () => {
    let context = canvas.getContext("2d");
    context.beginPath();
    context.strokeStyle ="#000";
    context.lineWidth = 2;
    
    const drawLine = (fromX, fromY, toX, toY) => {
        context.moveTo(fromX, fromY);
        context.lineTo(toX, toY);
        context.stroke();
    };

    const head = () => {
        context.beginPath();
        context.arc(70,30,10,0,Math.PI*2,true);
        context.stroke();
    }

    const body = () => {
        drawLine(70,40,70,80);
    }

    const leftArm =() =>{
        drawLine(70,50,50,70);
    }

    const rightArm = () => {
        drawLine(70,50,90,70);
    }

    const leftLeg = () => {
        drawLine(70,80,50,110);
    }

    const rightLeg = () => {
        drawLine(70,80,90,110);
    };

    const initialDrawing=() =>{
        context.clearRect(0,0, context.canvas.width,context.canvas.height);
    
        drawLine(10, 130,130,130);
        drawLine(10,10,10,131);
        drawLine(10,10,70,10);
        drawLine(70,10,70,20);
    };

    return {initialDrawing,head,body,leftArm,rightArm,leftLeg,rightLeg};
};

const drawMan = (count) => {
    let{head,body,leftArm,rightArm,leftLeg,rightLeg} = canvasCreator();
    switch(count) {
        case 1:
            head();
            break;
        case 2: 
            body();
            break;
        case 3:
            leftArm();
            break;
        case 4:
            rightArm();
            break;
        case 5:
            leftLeg();
            break;
        case 6: 
            rightLeg();
            break;
        default:
                break;
    }
};



newGameButton.addEventListener("click", initializer);
window.onload = initializer;