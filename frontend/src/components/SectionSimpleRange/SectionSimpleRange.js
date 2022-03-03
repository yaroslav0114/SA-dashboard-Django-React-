import Box from '@mui/material/Box'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'

import ExpandableContainer from 'components/ExpandableContainer'
import SimpleRange from 'components/SimpleRange'
import { LayoutMetricType } from 'utils/propTypes'
import { COLOR_PALETTES, filterData } from './SectionSimpleRange.utils'

const SectionSimpleRange = ({ layout, data }) => {
  const xAxisKey = layout.x?.key
  const yAxisKey = layout.y?.key
  if (typeof layout.max !== 'undefined' && typeof layout.min !== 'undefined') {
    return <SimpleRange value={data} min={layout.min} max={layout.max} style={layout.options.style} />
  }
  if (xAxisKey && yAxisKey) {
    const filteredData = filterData(data, layout.filters)
    return (
      <Box>
        <ExpandableContainer data={filteredData}>
          {items =>
            items.map((item, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="fieldLabel">{item[xAxisKey]}</Typography>
                <SimpleRange
                  value={item[yAxisKey]}
                  min={item.min}
                  max={item.max}
                  style={layout.options.style}
                  color={COLOR_PALETTES[layout.title]}
                />
              </Box>
            ))
          }
        </ExpandableContainer>
      </Box>
    )
  }

  return null
}

SectionSimpleRange.propTypes = {
  layout: LayoutMetricType,
  data: PropTypes.any,
}

export default SectionSimpleRange
