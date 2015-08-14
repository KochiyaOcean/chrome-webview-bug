
var fixon = true

var $container = document.getElementById('container')
var $scalevalue = document.getElementById('scalevalue')
var $scaling = document.getElementById('scaling')
var $togglefix = document.getElementById('togglefix')
var $range = document.getElementById('range')
var $webview = document.getElementById('webview')

$range.addEventListener('change', onScale)
$range.addEventListener('input', onScale)

function onScale () {
  var scale = $range.value
  $scalevalue.textContent = scale + '%'
  scale = scale / 100
  $container.style.width = (scale * 320) + 'px'
  $container.style.height = (scale * 240) + 'px'
  $scaling.style.transform = 'scale(' + scale + ')'
  $scaling.style.transformOrigin = '0 0'
  if (fixon) {
    //
    // This is where the magic happens
    //
    $webview.style.width = 1 / scale * 100 + '%'
    $webview.style.height = 1 / scale * 100 + '%'
  }
}

$webview.addEventListener('loadcommit', function () {
  $webview.executeScript({ code: "document.body.style.backgroundColor = '#fff'" })
})

$togglefix.addEventListener('change', function (e) {
  if ($togglefix.value === 'on') {
    fixon = true
    onScale()
  } else {
    fixon = false
    $webview.style.width = ''
    $webview.style.height = ''
    onScale()
  }
})
