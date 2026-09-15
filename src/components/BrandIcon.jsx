import {Box, Title } from "@mantine/core"
import { RiFlowerLine } from "react-icons/ri";
const BrandIcon = ({title}) => {
  return (
  <>
  
            <Box
              style={{
                position: 'relative',
                textAlign: 'center',
              }}
            >
              <Title
                style={{
                  fontSize: 'clamp(120px, 15vw, 240px)',
                  fontWeight: 900,
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                }}
                c="brand.5"
              >
                {title}
              </Title>
  
              <Box
                style={{
                  position: 'absolute',
                  top: '48%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  opacity: 0.15,
                }}
              >
                <RiFlowerLine size={250} />
              </Box>
            </Box>
  </>
  )
}

export default BrandIcon