import { Button, Input, Select, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"

const Ensayos = () => {
    const [ensayo, setEnsayo] = useState([])
    useEffect(() => {
        axios.get("src/ensayos.json")
        .then((ensayo) => setEnsayo(ensayo.data))
    }, [])
    const filtrar= () => {
        setEnsayo((analisis)=>{
            return(
                analisis.filter((item)=> item.ensayo == (filtro.value))
        )})
    }
    return(
        <>
            <Select placeholder='Descuento'>
                <option value='sin'>Sin descuento</option>
                <option value='pyme'>Descuento MiPyme</option>
                <option value='cantidad'>Descuento por cantidad</option>
            </Select>
            <Input onKeyUp={()=>filtrar(ensayo)} type="search" id="filtro" name="hola"></Input>
            <TableContainer>
                <Table variant='simple'>
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                    <Thead>
                        <Tr>
                            <Th></Th>
                            <Th>Codigo OfTec 2020</Th>
                            <Th>Detalle</Th>
                            <Th>Arancel Dispo INTI</Th>
                            <Th>Característica</Th>
                        </Tr>
                    </Thead>
                    {ensayo.map((item)=>{
                        return (
                            <Tbody>
                                <Tr>
                                    <Td>
                                        <Button size='xs'>+</Button>
                                        <Button size='xs'>-</Button>
                                    </Td>
                                    <Td>{item.Codigo}</Td>
                                    <Td>{item.Detalle}</Td>
                                    <Td isNumeric>{item.Arancel}</Td>
                                    <Td>{item.Caracteristica}</Td>
                                </Tr>
                            </Tbody>
                        )
                    })}
                    {/* <Tfoot>
                        <Tr>
                            <Th>To convert</Th>
                            <Th>into</Th>
                            <Th isNumeric>multiply by</Th>
                        </Tr>
                    </Tfoot> */}
                </Table>
            </TableContainer>
        </>
    )
}

export default Ensayos