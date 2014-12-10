/*
 *  Copyright (C) 2007 - 2013 GeoSolutions S.A.S.
 *  http://www.geo-solutions.it
 *
 *  GPLv3 + Classpath exception
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
 /**
 * 
 * Factsheet display window.
 * 
 * Author: Lorenzo Pini (GeoSolutions S.A.S.)
 *
 */
Ext.IframeWindow = Ext.extend(Ext.Window, {
    onRender: function() {
        this.bodyCfg = {
            tag: 'iframe',
            src: this.src,
            cls: this.bodyCls,
            style: {
                border: '0px none'
            }
        };
        Ext.IframeWindow.superclass.onRender.apply(this, arguments);
        this.tbarDiv = Ext.get('topBar');
        this.mainDiv = Ext.get('main');
        this.disclaimerDiv = Ext.get('disclaimer');
        Ext.EventManager.onWindowResize(this.resizeHandler, this);

    },
    onDestroy: function(){
        Ext.EventManager.removeResizeListener(this.resizeHandler, this);
        
    },
    resizeHandler: function(w, h){
        this.setPosition(this.tbarDiv.getX() - 5 , this.tbarDiv.getY() + this.tbarDiv.getHeight() - 31 );
        this.setWidth(this.mainDiv.getWidth() + 10 );
        this.setHeight(this.mainDiv.getHeight() + this.tbarDiv.getHeight() - 49 );
    }
});

Ext.onReady(function(){
    //
	//Factsheet window
	//
    FigisMap.factsheetRel = function(factsheetUrl){
        //var factsheetUrl = factsheetUrl.replace("http://figisapps.fao.org/","");
        var factsheetUrl = factsheetUrl.replace(FigisMap.geoServerBase + "/","");
        if(!factsheetUrl)
            //factsheetUrl = "http://figisapps.fao.org/fishery/vme/10/en";
            factsheetUrl = FigisMap.geoServerBase + "/fishery/vme/10/en";
        var tbarDiv = Ext.get('topBar');
        var mainDiv = Ext.get('main');
        //var disclaimerDiv = Ext.get('disclaimer');
        new Ext.IframeWindow({
            id:'factsheetWindow',
            x: tbarDiv.getX(),
            y: tbarDiv.getY() + tbarDiv.getHeight() - 10,
            width: mainDiv.getWidth(),
            height: mainDiv.getHeight() + tbarDiv.getHeight() + 170,//+disclaimerDiv.getHeight(),
            //title: "VME fact sheet <a style=\"position:absolute;right:60px;\" onclick=\"Ext.getCmp('factsheetWindow').close();\">&laquo;back to map&nbsp;</a>",
			title: " <a style=\"position:absolute;right:60px;\" onclick=\"Ext.getCmp('factsheetWindow').close();\">&laquo;Back to map&nbsp;</a>",
            //src:"http://figisapps.fao.org/"+factsheetUrl,
            src: FigisMap.geoServerBase + "/" + factsheetUrl,
            //src:factsheetUrl,
            closeAction: 'destroy',
            maximizable: false,
			maximized: true,
            draggable: false,
            resizable: false,
            shadow: false
        }).show();
    };
	
	
});
 
