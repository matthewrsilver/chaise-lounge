var script = document.createElement('script');
script.textContent = "$('#perpage').val(100).trigger(\"change\");";
(document.head||document.documentElement).appendChild(script);
script.parentNode.removeChild(script);