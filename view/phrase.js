
module.exports = function( vs ){

  // validate required params
  if( !vs.isset('input:name') ||
      !vs.isset('phrase:analyzer') ||
      !vs.isset('phrase:field') ||
      !vs.isset('phrase:boost') ||
      !vs.isset('phrase:slop') ){
    return null;
  }

  // base view
  var view = { 'match': {} };

  // match query
  view.match[ vs.var('phrase:field') ] = {
    analyzer: vs.var('phrase:analyzer'),
    type: 'phrase',
    boost: vs.var('phrase:boost'),
    slop: vs.var('phrase:slop'),
    query: vs.var('input:name')
  };

  if (vs.isset('phrase:fuzziness')) {
    view.match[ vs.var('phrase:field') ].fuzziness = vs.var('phrase:fuzziness');
  }

  if (vs.isset('phrase:cutoff_frequency')) {
    view.match[ vs.var('phrase:field') ].cutoff_frequency = vs.var('phrase:cutoff_frequency');
  }

  return view;
};
