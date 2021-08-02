import ChartistGraph from 'react-chartist';

const Chart = () => {
  var data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    series: [
      {
        data: [1, 2, 3, 5, 8, 13],
      },
    ],
  };

  var options = {
    axisX: {
      labelInterpolationFnc: function (value) {
        return 'Calendar Week ' + value;
      },
    },
    width: '95vw',
    height: '600px',
  };

  var type = 'Line';

  return (
    <div style={{ background: 'white', borderRadius: '1rem' }}>
      <ChartistGraph data={data} type={type} options={options} />
    </div>
  );
};

export default Chart;
