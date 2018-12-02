<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:oxm="https://www.openxsl.com">
    <xsl:template match="/root" name="wurui.slider-xw">
        <!-- className 'J_OXMod' required  -->
        <div class="J_OXMod oxmod-slider-xw" ox-mod="slider-xw">
        	<xsl:variable select="data/ui-imglist/i[position() &lt; 7]" name="list"/>
        	<xsl:variable select="count($list)" name="len"/>

            <div class="J_win window" data-count="{$len}">
            	<table class="sliderbox" cellpadding="0" cellspacing="0" width="{$len}00%">
            		<tbody>
            			<tr>
		            		<xsl:for-each select="$list">
		            			<td class="item" width="{100 div $len}%">
		            				<a href="">
			            				<img class="mainpic" style="background-image:url({img})" src="//a.oxm1.cc/img/blank.png"/>
			            				<p class="text-box">
			            					<xsl:value-of select="title"/>
			            				</p>
			            			</a>
		            			</td>
		            		</xsl:for-each>
	            		</tr>
	            	</tbody>
            	</table>
            </div>
            <div class="J_index index" data-on="1">
            	<xsl:for-each select="$list">
            		<i></i>
            	</xsl:for-each>
            </div>
        </div>
    </xsl:template>
</xsl:stylesheet>
