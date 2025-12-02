function FileHandler() {
    this.SVGexporter = function () {
        //Get all svg element
        var html = $('<div>').append($('#space').clone()).html();

        var blob = new Blob([html.toString()], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "layout.svg");
    }

    this.STLexporter = function (_scene) {

        var exporter = new THREE.STLBinaryExporter();
        var stl_string = exporter.parse(_scene);

        var blob = new Blob([stl_string], { type: "text/plain" });
        saveAs(blob, "layout.stl");
    }

}
