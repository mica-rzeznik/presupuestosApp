import { Button, FormControl, FormLabel, Box, Input } from '@chakra-ui/react'
import { useState } from 'react'

// numPresupuesto
// fecha
// para
// razonSocial
// numUsuario
// telefono
// email
// de

const Formulario = () => {
    const [inputNumPresupuesto, setInputNumPresupuesto] = useState('')
    const [inputFecha, setInputFecha] = useState('')
    const [inputPara, setInputPara] = useState('')
    const [inputRazonSocial, setInputRazonSocial] = useState('')
    const [inputNumUsuario, setInputNumUsuario] = useState('')
    const [inputTelefono, setInputTelefono] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputDe, setInputDe] = useState('')
    const [inputReemplazo, setInputReemplazo] = useState('')
    const [inputItem, setInputItem] = useState('')
    const [inputCantidad, setInputCantidad] = useState('')
    const [inputTiempo, setInputTiempo] = useState('')
    const [inputObservaciones, setInputObservaciones] = useState('')
    return(
        <>
            <Box bg='lightblue' borderWidth='1px' borderRadius='lg' overflow='hidden' p={2} /*className={nameClass}*/>
                <form /*onSubmit={crearOrden}*/ id="formularioDatos">
                    <FormControl isRequired>
                        <FormLabel>PRESUPUESTO N.º: Año/XXXX versión X.</FormLabel>
                        <Input bg='white' value={inputNumPresupuesto} type="text" onChange={(e) => setInputNumPresupuesto (e.target.value)} placeholder='Año/XXXX versión X' name="numPresupuesto"/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>FECHA:</FormLabel>
                        <Input bg='white' value={inputFecha} type="date" onChange={(e) => setInputFecha (e.target.value)} name="fecha"/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Para:</FormLabel>
                        <Input bg='white' value={inputPara} type="text" onChange={(e) => setInputPara (e.target.value)} placeholder='Cliente' name="para"/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Razón social:</FormLabel>
                        <Input bg='white' value={inputRazonSocial} type='text' onChange={(e) => setInputRazonSocial (e.target.value)} name="razonSocial"/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>N.º de usuario:</FormLabel>
                        <Input bg='white' value={inputNumUsuario} type="text" onChange={(e) => setInputNumUsuario (e.target.value)} placeholder='ND' name="numUsuario"/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Teléfono:</FormLabel>
                        <Input bg='white' value={inputTelefono} type="text" onChange={(e) => setInputTelefono (e.target.value)} name="telefono"/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>E-mail:</FormLabel>
                        <Input bg='white' value={inputEmail} type="email" onChange={(e) => setInputEmail (e.target.value)} name="email"/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>De:</FormLabel>
                        <Input bg='white' value={inputDe} type="text" onChange={(e) => setInputDe (e.target.value)} name="de"/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Reemplaza a:</FormLabel>
                        <Input bg='white' value={inputReemplazo} type="text" onChange={(e) => setInputReemplazo (e.target.value)} placeholder='Año/XXXX versión X' name="de"/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Ítem de ensayo o calibración:</FormLabel>
                        <Input bg='white' value={inputItem} type="text" onChange={(e) => setInputItem (e.target.value)} name="de"/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Cantidad mínima de muestra:</FormLabel>
                        <Input bg='white' value={inputCantidad} type="text" onChange={(e) => setInputCantidad (e.target.value)} placeholder='Cantidad de envases de (g, ml, otro) c/u.' name="de"/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Tiempo estimado de entrega de resultados:</FormLabel>
                        <Input bg='white' value={inputTiempo} type="number" onChange={(e) => setInputTiempo (e.target.value)} placeholder='Ingrese sólo números.' name="de"/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Observaciones</FormLabel>
                        <Input bg='white' value={inputObservaciones} type="text" onChange={(e) => setInputObservaciones (e.target.value)} name="de"/>
                    </FormControl>
                    <Button /*isLoading={cargando}*/ colorScheme='blackAlpha' variant='solid' type='submit'>
                        Confirmar datos
                    </Button>
                </form>
            </Box>
            <p>{inputPara}</p>
        </>
    )
    
}
export default Formulario